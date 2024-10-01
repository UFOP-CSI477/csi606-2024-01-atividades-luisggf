import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getCartItems(app: FastifyInstance) {
  app.get('/get-cart', async (request, reply) => {
    try {
      const carts = await prisma.cart.findMany({
        include: {
          cartItems: true
        }
      });
      return reply.send(carts);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      return reply.status(500).send({ error: "Failed to fetch cart items" });
    }
  });
}
