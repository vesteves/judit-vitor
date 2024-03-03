import { ListParamsCreate } from "./list.type";
import ListModel from './list.model'
import CNJModel from "../cnj/cnj.model";
import { Types } from "mongoose";

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

    public findOne(params: any) {
        return this.model.findOne(params)
    }
}

export default ListRepository