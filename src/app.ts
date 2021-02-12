import fastify, { FastifyServerOptions } from 'fastify'
import authRouters from './routers/auth'

const buildApp = (option: FastifyServerOptions) => {
    const app = fastify(option)

    app.get('/', async () => {
        return 'OK'
    })

    app.register(authRouters, { prefix: '/auth' })

    return app
}

export default buildApp