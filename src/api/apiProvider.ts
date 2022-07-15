const apiProvider = {
    get: async (url: string, token?: string) => {
        const rawResponse = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                ...(token ? { 'Authorization': `Bearer ${token}` } : {})
            }
        })
        const response = rawResponse.json();

        return response;
    },

    post: async (url: string, data: any, token?: string) => { // TODO: del any
        const rawResponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                ...(
                    token ?
                        { 'Authorization': `Bearer ${token}` } :
                        { 'Content-Type': 'application/x-www-form-urlencoded', }
                )
            },
            body: data
        })
        const response = rawResponse.json();

        return response;
    },

    delete: async (url: string, token: string) => { // TODO: del any
        const rawResponse = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        const response = rawResponse.json();

        return response;
    }
}

export default apiProvider