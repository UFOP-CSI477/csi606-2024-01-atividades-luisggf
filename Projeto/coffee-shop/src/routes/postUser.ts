import { FastifyInstance } from "fastify";
import {z} from "zod"
import { prisma } from "../lib/prisma"

export async function insertUser (app: FastifyInstance) {

    // reply parameter can be used to inform more precise requests codes, in this case 201 os more suited than 200
    app.post('/create-user', async (request, reply) => {
        const createUserBody = z.object({
            username: z.string(),
            password: z.string(),
            email: z.string()
        })
        const { username, password, email } = createUserBody.parse(request.body)

        const user = await prisma.user.create({
            data: {
                username,
                password,
                email
            }
        }) 

        return reply.status(201).send({user})
    })
}