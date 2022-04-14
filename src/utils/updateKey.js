const API_URL = process.env.REACT_APP_DIAMOND_API_URL;
const user = process.env.REACT_APP_DIAMOND_API_USER;
const pass = process.env.REACT_APP_DIAMOND_API_PASS;
const clientId = process.env.REACT_APP_DIAMOND_CLIENT_ID;
const secret = process.env.REACT_APP_DIAMOND_CLIENT_SECRET;

export async function fetchKey() {
    let response = await fetch(`${API_URL}api/oauth/v2/token?grant_type=password&username=${user}&password=${pass}&client_id=${clientId}&client_secret=${secret}`)
    response = await response.json()
    return {
        access_token: response.access_token,
        validTill: (Math.floor(new Date().getTime() / 1000) + response.expires_in)
    }
 }