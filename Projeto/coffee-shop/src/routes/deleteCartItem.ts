import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import z from "zod";

export async function deleteCartItem(app: FastifyInstance) {
  app.delete(
    "/delete-cart-item/:cartItemId/:cartId",
    async (request, reply) => {
      const paramsSchema = z.object({
        cartItemId: z.preprocess((val) => Number(val), z.number().int()),
        cartId: z.string(),
      });

      try {
        const { cartItemId, cartId } = paramsSchema.parse(request.params);

        // Find the cart item first
        const cartItem = await prisma.cartItem.findFirst({
          where: {
            id: cartItemId,
            cartId: cartId,
          },
        });

        if (!cartItem) {
          return reply.status(404).send({ message: "Cart item not found" });
        }

        // Delete the cart item
        await prisma.cartItem.delete({
          where: { id: cartItemId },
        });

        return reply
          .status(200)
          .send({ message: "Cart item deleted successfully", cartItem });
      } catch (error) {
        console.error("Error deleting cart item:", error);

        // Handle validation errors
        if (error instanceof z.ZodError) {
          return reply
            .status(400)
            .send({ message: "Invalid request parameters" });
        }

        return reply.status(500).send({ message: "Internal server error" });
      }
    }
  );
}
