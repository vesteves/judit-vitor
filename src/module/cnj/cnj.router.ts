import Router from "koa-router"
import CNJController from "./cnj.controller"
import CNJFactory from "./cnj.factory"
import { CNJParamsCreate, CNJParamsUpdate } from './'
import CNJService from "./cnj.service"
import ListFactory from "../list/list.factory"
import { Types } from "mongoose"

export const router = new Router({
    prefix: '/cnj'
})

const controller = new CNJController(CNJFactory, CNJService, ListFactory)

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
        } = ctx.request.body as CNJParamsCreate;

        const data = await controller.add(searchKey);

        ctx.status = 200;
        ctx.body = data;
    } catch (error: any) {
        ctx.status = 500;
        ctx.body = 'Error while storing CNJ';
        console.error(error);
    }
});

router.get('/list/:listId', async (ctx, _) => {
    try {
        const data = await controller.findCNJsInList(ctx.params.listId);
        ctx.body = data
    } catch (error) {
        console.error(error)
        ctx.status = 500
        ctx.body = 'Error while fetching List'
    }
})

router.put('/:_id', async (ctx, _) => {
    try {
        const {
            listId,
        } = ctx.request.body as CNJParamsUpdate;

        const data = await controller.update(new Types.ObjectId(ctx.params._id), listId);

        ctx.status = 200;
        ctx.body = data;
    } catch (error: any) {
        ctx.status = 500;
        ctx.body = 'Error while storing CNJ';
        console.error(error);
    }
});
