import { fastify } from 'fastify'
import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider,

} from 'fastify-type-provider-zod'

import { fastifyCors } from '@fastify/cors'
import { Console } from 'console'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
    origin: 'http://localhost:5173',
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.listen({ port: process.env.PORT ? Number(process.env.PORT) : 3333}).then(() => {
    console.log(`Port: ${process.env.PORT}`)
    console.log('HTTP server running! ')
})