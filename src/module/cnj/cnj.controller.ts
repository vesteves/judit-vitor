import CNJFactory from './cnj.factory'
import { CNJCreate, List } from './cnj.type';
import CNJService from './cnj.service';

class CNJController {
    private factory: typeof CNJFactory;
    private service: typeof CNJService;

    constructor(factory: typeof CNJFactory, service: typeof CNJService) {
        this.factory = factory
        this.service = service
    }

    async find() {
        return await this.factory.find()
    }

    async add(key: string) {
        const cnjExists = await this.factory.find({ searchKey: key })

        if (cnjExists.length) {
            throw new Error('CNJ already exists on database')
        }
        const response = await this.service.createRequest(key)
        const data: CNJCreate = {
            requestId: response.requestId,
            searchKey: key,
            lastStatus: response.status,
            list: List.BACKLOG
        }
        return await this.factory.add(data)


    }
}

export default CNJController