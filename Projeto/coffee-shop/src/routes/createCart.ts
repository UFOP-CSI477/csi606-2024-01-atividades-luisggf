import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function insertCart(app: FastifyInstance) {
    app.post('/create-cart', async (request, reply) => {
        try {
            // Create a new cart
            const cart = await prisma.cart.create({
                data: {} as any
            });

            return reply.status(201).send({ cartId: cart.id });
        } catch (error) {
            // Handle other errors
            console.error("Error:", error);
            return reply.status(500).send({ message: "Internal server error" });
        }
    });
}
