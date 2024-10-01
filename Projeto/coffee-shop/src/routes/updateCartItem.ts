import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function updateCartItemQuantity(app: FastifyInstance) {
  app.put('/update-cart-item', async (request, reply) => {
    const updateCartItemBody = z.object({
      cartItemId: z.number().int(),
      quantity: z.number().int().positive()
    });

    try {
      const { cartItemId, quantity } = updateCartItemBody.parse(request.body);

      const cartItem = await prisma.cartItem.update({
        where: { id: cartItemId },
        data: { quantity }
      });

      return reply.status(200).send(cartItem);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return reply.status(400).send({ message: "Invalid request body" });
      }
      console.error("Error updating cart item:", error);
      return reply.status(500).send({ message: "Internal server error" });
    }
  });
}
