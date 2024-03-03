import Router from "koa-router"
import CNJController from "./cnj.controller"
import CNJFactory from "./cnj.factory"
import { CNJCreate } from './'

export const router = new Router({
    prefix: '/cnj'
})

const controller = new CNJController(CNJFactory)

router.get('/', async (ctx, _) => {
    try {
        const data = await controller.find();
        ctx.body = data
    } catch (error) {
        console.error(error)
        ctx.status = 500
        ctx.body = 'Error while fetching CNJ'
    }
})

router.post('/', async (ctx, _) => {
    try {
        const {
            searchKey,
            requestId,
            lastStatus
        } = ctx.request.body as CNJCreate;

        const data = await controller.add({
            searchKey,
            requestId,
            lastStatus
        });

        ctx.status = 200;
        ctx.body = data;
    } catch (error: any) {
        ctx.status = 500;
        ctx.body = 'Error while storing CNJ';
        console.error(error);
    }
});
