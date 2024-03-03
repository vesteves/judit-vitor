import CNJFactory from './cnj.factory'
import { CNJCreate } from './cnj.type';

class CNJController {
    private factory: any;

    constructor(factory: typeof CNJFactory) {
        this.factory = factory
    }

    async find() {
        return await this.factory.find()
    }

    async add(params: CNJCreate) {
        return await this.factory.add(params)
    }
}

export default CNJController