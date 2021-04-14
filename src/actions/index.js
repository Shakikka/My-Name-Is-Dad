export const loadData = () => {
  return (dispatch) => {
    fetch('https://icanhazdadjoke.com/', {
      headers: { "Accept": "application/json" }
    })
      .then(response => response.json())
      .then(data => dispatch({ type: 'DATA_LOADED', payload: data }))
  }
}

export const searchData = (searchTerm) => {
  return (dispatch) => {
    fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}`, {
      headers: { "Accept": "application/json" }
    })
      .then(response => response.json())
      .then(data => dispatch({ type: 'DATA_SEARCHED', payload: data }))
  }
}
