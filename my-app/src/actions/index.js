export const getData = () => {
    return function(dispatch){
        return fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => dispatch({type: 'DATA_LOADED', payload: json}))
    }
};
