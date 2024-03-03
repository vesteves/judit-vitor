import { Types } from "mongoose";

export enum List {
    BACKLOG = 'backlog',
    DISCOVER = 'discover',
    LEAD = 'lead',
    DEAL = 'deal',
    ARCHIVED = 'archived'
}

export interface CNJCreate {
    requestId: string;
    searchKey: string;
    lastStatus: string;
    lists: {
        listRef: Types.ObjectId;
    }[];
}

export interface CNJParamsCreate {
    searchKey: string;
}