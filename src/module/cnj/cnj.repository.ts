import { CNJCreate } from "./cnj.type";
import CNJModel from './cnj.model'

class CNJRepository {
    private model;

    constructor(model: typeof CNJModel) {
        this.model = model
    }

    public add(params: CNJCreate) {
        return this.model.create(params)
    }

    public find(params: any = {}) {
        return this.model.find(params)
    }

    public findOne(params: any = {}) {
        return this.model.findOne(params)
    }
}

export default CNJRepository