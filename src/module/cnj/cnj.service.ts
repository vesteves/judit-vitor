import Judit from '@/service/judit'

class CNJService {
    private juditService: Judit

    constructor(juditService: Judit) {
        this.juditService = juditService
    }

    async createRequest(key: string) {
        const data = {
            search: {
                search_type: "lawsuit_cnj",
                search_key: key
            }
        }
        return this.juditService.createRequest(data)
    }
}

export default new CNJService(new Judit())