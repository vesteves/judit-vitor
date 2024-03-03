class Judit {
    async processList() {
        try {
            const response = await fetch(`${process.env.API_URL}/requests`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json',
                    'api-key': process.env.API_KEY || '',
                },
            })

            return await response.json()
        }
        catch (error: any) {
            console.log(error)
            return 'Error while fetching JUDIT API'
        }
    }

    async createRequest(data: any) {
        try {
            const response = await fetch(`${process.env.API_URL}/requests`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json',
                    'api-key': process.env.API_KEY || '',
                },
                body: JSON.stringify(data)
            })

            return await response.json()
        }
        catch (error: any) {
            console.log(error)
            return 'Error while creating request on JUDIT API'
        }
    }

    async checkRequest(requestId: string) {
        try {
            const response = await fetch(`${process.env.API_URL}/requests/${requestId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json',
                    'api-key': process.env.API_KEY || '',
                },
            })

            return await response.json()
        }
        catch (error: any) {
            console.log(error)
            return 'Error while creating request on JUDIT API'
        }
    }
}

export default Judit