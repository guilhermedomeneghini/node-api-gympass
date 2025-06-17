import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

export const app = fastify()

// instanciando o prismaclient
const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'irineu',
    email: 'mail@email.com',
  },
})
