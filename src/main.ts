import Koa from 'koa'
import Router from "koa-router"
import dotenv from 'dotenv'
import bodyParser from 'koa-bodyparser';
dotenv.config()

// database connection
import { connectDB } from './service/database';

// routes
import { router as CNJRouter } from '@/module/cnj/cnj.router'
import { router as ListRouter } from '@/module/list/list.router'

const app = new Koa()
const router = new Router()

router.get('/health', async (ctx, _) => {
    ctx.body = 'OK'
})

app.use(bodyParser())
app.use(router.routes())
app.use(CNJRouter.routes())
app.use(ListRouter.routes())

app.listen(3000, async () => {
    await connectDB()
    console.log('Server ON')
})