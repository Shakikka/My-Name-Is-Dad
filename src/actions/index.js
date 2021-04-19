export const loadData = () => {
  return (dispatch) => {
    fetch('https://icanhazdadjoke.com/', {
      headers: { "Accept": "application/json" }
    })
      .then(checkForError)
      .then(data => dispatch({ type: 'DATA_LOADED', payload: data }))
      .catch(error => alert(error))
  }
}

export const searchData = (searchTerm) => {
  return (dispatch) => {
    fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}`, {
      headers: { "Accept": "application/json" }
    })
      .then(checkForError)
      .then(data => dispatch({ type: 'DATA_SEARCHED', payload: data }))
      .catch(error => alert(error))
  }
}

const checkForError = (response) => {
  if (!response.ok) {
    throw new Error(response.message);
  } else {
    return response.json();
  }
}