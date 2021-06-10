import { FETCH_USER } from "../actions/userActionType"

const initialState = {
    users: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case FETCH_USER:
            return { ...state, users: [...payload] }
        default:
            return state
    }
}
