import { FastifyInstance } from "fastify";
import { promises as fs } from "fs";
import path from "path";
import { prisma } from "../lib/prisma";

export async function insertCoffee(app: FastifyInstance) {
  app.post("/ins-coffee", async (request, reply) => {
    try {
      const parts = request.parts();
      let name = "";
      let description = "";
      let price = 0;
      let fileBuffer: Buffer | null = null;
      let fileName: string | null = null;

      for await (const part of parts) {
        console.log("Processing part:", part);
        if (part.type === "field") {
          console.log("Field part:", part.fieldname, part.value);
          if (part.fieldname === "name") {
            name = part.value as string;
          } else if (part.fieldname === "description") {
            description = part.value as string;
          } else if (part.fieldname === "price") {
            price = parseFloat(part.value as string);
          }
        } else if (part.type === "file") {
          console.log("File part:", part.filename);
          fileName = part.filename;
          fileBuffer = await part.toBuffer();
        }
      }

      console.log("Final values:", { name, description, price, fileName });

      if (!fileBuffer) {
        return reply.status(400).send({ error: "File is required" });
      }

      if (!name || !description || !price) {
        return reply.status(400).send({ error: "Missing required fields" });
      }

      const uploadDir = path.join(__dirname, "../../uploads");
      await fs.mkdir(uploadDir, { recursive: true });

      const uniqueFileName = `${Date.now()}-${fileName}`;
      const filePath = path.join(uploadDir, uniqueFileName);
      await fs.writeFile(filePath, fileBuffer);

      const img_url = `/uploads/${uniqueFileName}`;

      const coffee = await prisma.coffee.create({
        data: {
          name,
          price,
          description,
          img_url,
        },
      });

      return reply.status(201).send({ coffee_id: coffee.id });
    } catch (error) {
      console.error("Error processing request:", error);
      return reply.status(500).send({ error: "Internal Server Error" });
    }
  });
}
