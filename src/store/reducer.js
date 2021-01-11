const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    if (action.type === "Addition") {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === "Subtraction") {
        return {
            counter: state.counter - 1
        }
    }
    return state;
}


export default reducer;