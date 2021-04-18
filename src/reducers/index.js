const initialState = {};

const reducer = (state = initialState, action) => {
    switch(action.type) {
      case 'DATA_LOADED':
        return {dadJoke: action.payload.joke, id: action.payload.id}
      case 'DATA_SEARCHED':
        return {filteredJokes: action.payload}
      default:
        return state
      }
}

export default reducer;
