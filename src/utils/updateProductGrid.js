const API_URL = process.env.REACT_APP_DIAMOND_API_URL;

export async function fetchGrid(token) {
    const bearer = `Bearer ${token}`
    try{
        let response = await fetch(`${API_URL}api/v4/diamond?limit=9&offset=0`, {
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': bearer,
            }
        })
        response = await response.json()
        return response.map(obj => obj.id)
    }
    catch(e) {
        return([])
    }
}