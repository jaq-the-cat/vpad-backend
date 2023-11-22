import { MiddlewareData } from '@infra/adapters'
import { tokenMiddleware } from './wrappers/hasToken'

export const isLoggedIn = async (data: MiddlewareData) =>
tokenMiddleware(data, async (user) => {
    return { id: user.id }
})