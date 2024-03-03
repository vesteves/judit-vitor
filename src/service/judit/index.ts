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
            return 'Error while fetching API'
        }
    }
}

export default Judit