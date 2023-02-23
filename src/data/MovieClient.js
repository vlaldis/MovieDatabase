import config from './config.json'

export const fetchMovies = async (keyword) => {
  const url = `${config.omdbUrl}/?apikey=${config.apiKey}&s=${keyword}`
  return await fetch(url, { method: 'GET' })
    .then(response => response.json())
    .then(json => json)
    .catch((error) => {
      console.error('Error:', error) // TODO Better error handling goes here
      window.alert('Error:', error)
    })
}
