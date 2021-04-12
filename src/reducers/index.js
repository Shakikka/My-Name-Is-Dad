import { loadJoke } from '../actions/index'

const initialState = { dadJoke: "", id: "" };

const reducer = (state = initialState, action) => {
    console.log(action)
    if(action.type === 'DATA_LOADED') {
        return {...state, ...{dadJoke: action.payload.joke, id: action.payload.id} }
    }
}

export async function loadData(dispatch, getState) {
  fetch('https://icanhazdadjoke.com/', {
    headers: {"Accept": "application/json"}
  })
  .then(response => response.json())
  .then(data => dispatch({type: 'DATA_LOADED', payload: data}))
}

export default reducer;
