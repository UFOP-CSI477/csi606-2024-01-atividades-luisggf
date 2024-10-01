import { FastifyInstance } from "fastify";
import { promises as fs } from "fs";
import path from "path";
import { prisma } from "../lib/prisma";

export async function deleteCoffee(app: FastifyInstance) {
  app.delete("/delete-coffee/:id", async (request, reply) => {
    try {
      const { id } = request.params as { id: string };

      // Check if the coffee exists
      const existingCoffee = await prisma.coffee.findUnique({
        where: { id },
      });

      if (!existingCoffee) {
        return reply.status(404).send({ error: "Coffee not found" });
      }

      // Delete the associated image file
      const imgPath = path.join(__dirname, "../../", existingCoffee.img_url);
      try {
        await fs.unlink(imgPath);
      } catch (err) {
        console.error("Error deleting image file:", err);
      }

      // Delete the coffee from the database
      await prisma.coffee.delete({
        where: { id },
      });

      return reply.status(200).send({ message: "Coffee deleted successfully" });
    } catch (error) {
      console.error("Error processing request:", error);
      return reply.status(500).send({ error: "Internal Server Error" });
    }
  });
}
