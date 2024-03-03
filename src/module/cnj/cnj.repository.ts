import { CNJCreate } from "./cnj.type";
import CNJModel from './cnj.model'
import { Types } from "mongoose";

class CNJRepository {
    private model;

    constructor(model: typeof CNJModel) {
        this.model = model
    }

    public add(params: CNJCreate) {
        return this.model.create(params)
    }

    public find(params: any = {}) {
        return this.model.find(params).populate({
            path: 'lists.listRef',
            select: 'name'
        })
    }

    public findOne(params: any = {}) {
        return this.model.findOne(params)
    }

    async findCNJsInList(listId: string) {
        return await this.model.aggregate([
            {
                $match: {
                    'lists.listRef': new Types.ObjectId(listId)
                }
            },
            {
                $project: {
                    searchKey: 1,
                    requestId: 1,
                    lastStatus: 1,
                    lastList: { $arrayElemAt: ["$lists", -1] }
                }
            },
            {
                $match: {
                    'lastList.listRef': new Types.ObjectId(listId)
                }
            }
        ]);
    }
}

export default CNJRepository