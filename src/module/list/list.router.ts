import Router from "koa-router"
import CNJController from "./list.controller"
import CNJFactory from "./list.factory"
import { ListParamsCreate } from '.'

export const router = new Router({
    prefix: '/list'
})

const controller = new CNJController(CNJFactory)

router.get('/', async (ctx, _) => {
    try {
        const data = await controller.find();
        ctx.body = data
    } catch (error) {
        console.error(error)
        ctx.status = 500
        ctx.body = 'Error while fetching List'
    }
})

router.post('/', async (ctx, _) => {
    try {
        const params = ctx.request.body as ListParamsCreate;

        const data = await controller.add(params);

        ctx.status = 200;
        ctx.body = data;
    } catch (error: any) {
        ctx.status = 500;
        ctx.body = 'Error while storing List';
        console.error(error);
    }
});
