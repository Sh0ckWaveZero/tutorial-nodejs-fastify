import { FastifyServerOptions } from 'fastify';
import buildApp from './src/app'
import config from './src/config'

const options: FastifyServerOptions = {
    logger: true
}
const app = buildApp(options)

app.listen(config.port)