import {setKey} from '../app/reducers/AuthToken';
import {setDate} from '../app/reducers/Validity';

const API_URL = process.env.REACT_APP_DIAMOND_API_URL;
const user = process.env.REACT_APP_DIAMOND_API_USER;
const pass = process.env.REACT_APP_DIAMOND_API_PASS;
const clientId = process.env.REACT_APP_DIAMOND_CLIENT_ID;
const secret = process.env.REACT_APP_DIAMOND_CLIENT_SECRET;

async function fetchKey() {
    let response = await fetch(`${API_URL}oauth/v2/token?grant_type=password&username=${user}&password=${pass}&client_id=${clientId}&client_secret=${secret}`)
    response = await response.json()
    return {
        access_token: response.access_token,
        validTill: (Math.floor(new Date().getTime() / 1000) + response.expires_in)
    }
 }

 export async function updateKey(token, validity, dispatch) {
    let now = Math.floor(new Date().getTime() / 1000);
    if(token === ""|| now > validity){
        const {access_token, validTill} = await fetchKey();
        dispatch(setKey(access_token))
        dispatch(setDate(validTill))
    }
 }