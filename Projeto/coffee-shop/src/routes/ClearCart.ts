import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function clearCart(app: FastifyInstance) {
  app.delete("/clear-cart", async (request, reply) => {
    console.log("Chegou");
    try {
      // First, delete all CartItem records
      await prisma.cartItem.deleteMany();

      // Then, delete all Cart records
      await prisma.cart.deleteMany();

      return reply.status(200).send({ message: "Cart cleared successfully" });
    } catch (error) {
      console.error("Error clearing cart:", error);
      return reply.status(500).send({ error: "Internal Server Error" });
    }
  });
}
