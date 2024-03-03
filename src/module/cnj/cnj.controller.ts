import CNJFactory from './cnj.factory'
import CNJService from './cnj.service';
import ListFactory from '@/module/list/list.factory';
import { CNJCreate } from './cnj.type';
import { Types } from 'mongoose';

class CNJController {
    private factory: typeof CNJFactory;
    private service: typeof CNJService;
    private listFactory: typeof ListFactory;

    constructor(factory: typeof CNJFactory, service: typeof CNJService, listfactory: typeof ListFactory) {
        this.factory = factory
        this.service = service
        this.listFactory = listfactory
    }

    async find() {
        return await this.factory.find()
    }

    async add(key: string) {
        const cnjExists = await this.factory.find({ searchKey: key });

        if (cnjExists.length) {
            throw new Error('CNJ already exists in the database');
        }

        const response = await this.service.createRequest(key);

        let backlogList = await this.listFactory.findOne('backlog');
        if (!backlogList) {
            backlogList = await this.listFactory.add({ name: 'backlog' });
        }

        const data: CNJCreate = {
            requestId: response.request_id,
            searchKey: key,
            lastStatus: response.status,
            lists: [{
                listRef: backlogList._id
            }]
        };

        return await this.factory.add(data);
    }

    async update(_id: Types.ObjectId, listId: Types.ObjectId) {
        const cnj = await this.factory.findOne({ _id });

        if (!cnj) {
            throw new Error('CNJ don\'t exists in the database');
        }

        if (cnj.requestId) {
            const response = await this.service.checkRequest(cnj.requestId)
            cnj.lastStatus = response.status
        }

        if (cnj.lists[cnj.lists.length - 1].listRef?.toString() !== listId.toString()) {
            cnj.lists.push({
                listRef: listId,
                date: new Date(),
            })
        }

        cnj.save()

        return cnj
    }

}

export default CNJController