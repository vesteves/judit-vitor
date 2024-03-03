export enum List {
    BACKLOG = 'backlog',
    DISCOVER = 'discover',
    LEAD = 'lead',
    DEAL = 'deal',
    ARCHIVED = 'archived'
}

export interface CNJCreate {
    searchKey: string;
    requestId: string;
    lastStatus: string;
    list: List
}

export interface CNJParamsCreate {
    searchKey: string;
}