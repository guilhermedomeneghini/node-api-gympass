## PRIMEIRO

NPM INIT -Y

2 - passo

 npm i typescript @types/node tsx tsup -D  para que seja possivel rodar projeto em TS e dps tsup para  converter TS para JS o famoso build

 3 - executar npx tsc --init para criar o arquivo tsconfig.json

 4 - alterar o target para es2020

 5 - instalar o fastify `npm i fastify`

 6 - instalar dotenv para uitlizar os .env no projeto

 7 - instalar o zod para cuidar de validações npm i zod

 8 - configurar os .env > e criar i env/index.ts e configurar as validações ex:

    import 'dotenv/config'
    import { z } from 'zod'

    const envSchema = z.object({
        NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
        PORT: z.coerce.number().default(3333),
    })

    const _env = envSchema.safeParse(process.env)

    if(_env.success === false) {
        console.error('❌ Invalid environment variables', _env.error.format())

        throw new Error('Invalid environment variables.')
    }

    export const env = _env.data



 9 - configurar o eslint > npm i eslint @rocketseat/eslint-config -D


 10 - instalar o prima > npm i prisma -d

 11 - inciar ee npx prisma init instalar restante da dependencia 

 12 - dps de criar model no schema dar um npx prisma generate

 13 - instalar o npm i @prisma/client

 para teste > npm i vitest vite-tsconfig-paths -D

