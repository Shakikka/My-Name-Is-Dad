const initialState = {}; 

const reducer = (state = initialState, action) => {
    console.log(action)
    if(action.type === 'DATA_LOADED') {
        return {...state, ...{dadJoke: action.payload.joke, id: action.payload.id} }
    }
}

export default reducer; 