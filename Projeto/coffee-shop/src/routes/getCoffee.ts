import { FastifyInstance } from "fastify";
import {z} from "zod"
import { prisma } from "../lib/prisma";

export async function getCoffee(app: FastifyInstance) {
    app.get('/coffee/:CoffeeID', async (request, reply) => {
        const getCoffeeParams = z.object({
            CoffeeID: z.string().cuid(),

        })

        const { CoffeeID} = getCoffeeParams.parse(request.params)

        const coffee = await prisma.coffee.findUnique({

            where: {
                id: CoffeeID
            },

        }) 
        
        return reply.send({coffee}) 
    })
}