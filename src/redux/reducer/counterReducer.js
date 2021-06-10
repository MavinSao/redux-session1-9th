const initState = {
    count: 0,
}
export const counterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'INCREASE':
            return { ...state, count: state.count + 1 }
        case 'ASYNC_INCE':
            return { ...state, count: state.count + 2 }
        case 'DECREASE':
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
}