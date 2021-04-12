export const loadJoke = joke => ({
    type: 'DATA_LOADED',
    payload: {
      joke
    }
})
