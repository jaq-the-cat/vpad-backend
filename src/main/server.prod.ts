import { App } from './app'
import { cors } from '@infra/middlewares/cors'
import * as dotenv from 'dotenv'
dotenv.config()

const startApplication = async () => {
    try {
        const expressApplication = new App()

        expressApplication.app.use(cors)

        console.log(process.env.PORT)
        console.log(process.env.SECRET)
        console.log(process.env.DATABASE_URL)
        console.log(process.env.NODE_ENV)

        expressApplication.app.listen(process.env.PORT, () =>
            console.log(`[API] Server running at http://localhost:${process.env.PORT}`)
        )
    } catch (e) {
        console.error('====================================')
        console.error(e)
        console.error('====================================')
    }
}

startApplication()