import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getCoffees(app: FastifyInstance) {
  app.get("/coffees", async (request, reply) => {
    try {
      const coffees = await prisma.coffee.findMany();
      // Map the image URL to include the server address
      const updatedCoffees = coffees.map((coffee) => ({
        ...coffee,
        img_url: `http://localhost:3333${coffee.img_url}`, // Adjust this based on your server address
      }));
      return reply.send(updatedCoffees);
    } catch (error) {
      console.error("Error fetching coffees:", error);
      return reply.status(500).send({ error: "Failed to fetch coffees" });
    }
  });
}
