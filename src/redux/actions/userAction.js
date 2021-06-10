import axios from "axios"
import { FETCH_USER } from "./userActionType"

export const fetchUser = () => async dp => {
    let response = await axios.get('https://jsonplaceholder.typicode.com/users')
    dp({
        type: FETCH_USER,
        payload: response.data
    })
}
