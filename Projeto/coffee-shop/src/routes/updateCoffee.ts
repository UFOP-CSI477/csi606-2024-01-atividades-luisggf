import { FastifyInstance } from "fastify";
import { promises as fs } from "fs";
import path from "path";
import { prisma } from "../lib/prisma";

export async function updateCoffee(app: FastifyInstance) {
  app.put("/update-coffee/:id", async (request, reply) => {
    console.log("bate");
    try {
      console.log("bate");
      const { id } = request.params as { id: string };
      const parts = request.parts();
      let name = "";
      let description = "";
      let price = 0;
      let fileBuffer: Buffer | null = null;
      let fileName: string | null = null;
      console.log(request.params);
      for await (const part of parts) {
        if (part.type === "field") {
          if (part.fieldname === "name") {
            name = part.value as string;
          } else if (part.fieldname === "description") {
            description = part.value as string;
          } else if (part.fieldname === "price") {
            price = parseFloat(part.value as string);
          }
        } else if (part.type === "file") {
          fileName = part.filename;
          fileBuffer = await part.toBuffer();
        }
      }
      console.log(id);
      // Check if the coffee exists
      const existingCoffee = await prisma.coffee.findUnique({
        where: { id },
      });

      if (!existingCoffee) {
        return reply.status(404).send({ error: "Coffee not found" });
      }

      let img_url = existingCoffee.img_url;

      // If a new file is provided, save it and update the img_url
      if (fileBuffer && fileName) {
        const uploadDir = path.join(__dirname, "../../uploads");
        await fs.mkdir(uploadDir, { recursive: true });

        const uniqueFileName = `${Date.now()}-${fileName}`;
        const filePath = path.join(uploadDir, uniqueFileName);
        await fs.writeFile(filePath, fileBuffer);

        img_url = `/uploads/${uniqueFileName}`;
      }

      // Update the coffee in the database
      const updatedCoffee = await prisma.coffee.update({
        where: { id },
        data: {
          name,
          description,
          price,
          img_url,
        },
      });

      return reply.status(200).send({ coffee_id: updatedCoffee.id });
    } catch (error) {
      console.error("Error processing request:", error);
      return reply.status(500).send({ error: "Internal Server Error" });
    }
  });
}
