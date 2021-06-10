
export const increase = () => {
    return {
        type: "INCREASE",
    }
}

export const asyncIncrease = (dispatch) => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: "ASYNC_INCE"
            })
        }, 1500)
    }
}

export const decrease = () => {
    return {
        type: "DECREASE",
    }
}