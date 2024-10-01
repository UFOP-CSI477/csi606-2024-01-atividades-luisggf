import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getCartId(app: FastifyInstance) {
  app.get("/get-cartID", async (request, reply) => {
    try {
      const cart = await prisma.cart.findFirst({});

      if (cart) {
        return reply.send({ cartId: cart.id });
      } else {
        return reply.status(404).send({ message: "Cart not found" });
      }
    } catch (error) {
      console.error("Error:", error);
      return reply.status(500).send({ message: "Internal server error" });
    }
  });
}
