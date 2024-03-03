import CNJFactory from './list.factory'
import { ListParamsCreate } from './list.type';

class ListController {
    private factory: typeof CNJFactory;

    constructor(factory: typeof CNJFactory) {
        this.factory = factory
    }

    async find() {
        return await this.factory.find()
    }

    async add(params: ListParamsCreate) {
        const listExists = await this.factory.find({ name: params.name })

        if (listExists.length) {
            throw new Error('List name already exists on database')
        }

        return await this.factory.add(params)
    }
}

export default ListController