import CNJFactory from './cnj.factory'
import CNJService from './cnj.service';
import ListFactory from '@/module/list/list.factory';
import { CNJCreate } from './cnj.type';

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
            requestId: response.requestId,
            searchKey: key,
            lastStatus: response.status,
            lists: [{
                listRef: backlogList._id
            }]
        };

        return await this.factory.add(data);
    }

}

export default CNJController