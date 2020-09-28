import _ from 'lodash'

const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY = 'fa9d0d5231885a95118b981f03791e87'
const PER_PAGE = 7

const checkStatus = response => {
    if (response.ok) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        return Promise.reject(error)
    }
}

const toJson = response => response.json()

const extractData = json => _.get(json, 'results', [])

const request = (endpoint = '') =>
    fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`)
    .then(checkStatus)
    .then(toJson)
    .then(extractData)

export const fetchPopularMovies = () =>
    request('trending/movie/week');

export const fetchPopularTVShows = () =>
    request('trending/tv/week');