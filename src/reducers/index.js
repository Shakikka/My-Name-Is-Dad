const initialState = {};

const reducer = (state = initialState, action) => {
    if(action.type === 'DATA_LOADED') {
        return {dadJoke: action.payload.joke, id: action.payload.id}
    }
    return state;
}

export default reducer;
