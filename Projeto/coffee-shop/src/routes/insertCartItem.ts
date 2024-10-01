import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function insertCartItem(app: FastifyInstance) {
  app.post("/add-to-cart", async (request, reply) => {
    const addToCartBody = z.object({
      coffeeId: z.string(),
      coffee_name: z.string(),
      coffee_desc: z.string(),
      quantity: z.number().int().positive(),
      coffee_price: z.number().positive(),
      img_url: z.string(),
    });

    try {
      const {
        coffeeId,
        coffee_name,
        coffee_desc,
        quantity,
        coffee_price,
        img_url,
      } = addToCartBody.parse(request.body);

      // Check if the coffee exists
      const coffee = await prisma.coffee.findUnique({
        where: { id: coffeeId },
      });
      if (!coffee) {
        return reply.status(404).send({ message: "Coffee not found" });
      }

      // Check if there is an existing cart, if not create a new one
      let cart = await prisma.cart.findFirst(); // Assuming a single cart per user/session, adapt as needed
      if (!cart) {
        cart = await prisma.cart.create({
          data: {},
        });
      }

      // Create the cart item
      const cartItem = await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          coffee_name,
          coffee_desc,
          coffeeId,
          quantity,
          coffee_price,
          img_url,
        },
      });

      return reply.status(201).send({ cartItemId: cartItem.id });
    } catch (error) {
      // Handle validation errors
      if (error instanceof z.ZodError) {
        return reply.status(400).send({ message: "Invalid request body" });
      }
      // Handle other errors
      console.error("Error:", error);
      return reply.status(500).send({ message: "Internal server error" });
    }
  });
}
