const initialState = { 
  dadJoke:[]
};

const reducer = (state = initialState, action) => {
    console.log(action)
    if(action.type === 'DATA_LOADED') {
        return {dadJoke: action.payload.joke, id: action.payload.id}
    }
    console.log('state', state)
    return state;
}

export default reducer;
