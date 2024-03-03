import { ListParamsCreate } from "./list.type";
import ListModel from './list.model'

class ListRepository {
    private model;

    constructor(model: typeof ListModel) {
        this.model = model
    }

    public add(params: ListParamsCreate) {
        return this.model.create(params)
    }

    public find(params: any = {}) {
        return this.model.find(params)
    }
}

export default ListRepository