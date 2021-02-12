import { AuthLoginBodyRequest } from '../types/handlers/auth'

export const handlerLogin = async (req: AuthLoginBodyRequest) => {
    const { username, password } = req.body
    return `handlerLoin (${username}, ${password})`
}

export default { handlerLogin }