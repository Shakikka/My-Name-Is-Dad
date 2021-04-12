export const loadData = () => {
  return (dispatch) => {
    fetch('https://icanhazdadjoke.com/', {
      headers: { "Accept": "application/json" }
    })
      .then(response => response.json())
      .then(data => dispatch({ type: 'DATA_LOADED', payload: data }))
  }
}
