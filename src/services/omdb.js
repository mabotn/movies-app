import HttpClient from 'axios'

const Search = async (query) => {
    return (await HttpClient.get('https://www.omdbapi.com/?apikey=b3410783&s=' + query)).data
}

const Details = async (id) => {
    return (await HttpClient.get('https://www.omdbapi.com/?apikey=b3410783&i=' + id)).data
}

export default {
    Search, Details
}