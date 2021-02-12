import { FastifyInstance } from 'fastify'
import { handlerLogin } from './../handlers/auth';

const authRouters = async (app: FastifyInstance) => {
    app.post('/login', handlerLogin)
}

export default authRouters