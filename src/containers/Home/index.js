import React, { useState } from 'react'
import OmdbService from '../../services/omdb'
import Search from '../../components/Search'
import Card from '../../components/Card'
import Info from '../../components/Info'

const Home = () => {
    const [failed, setFailed] = useState(false)
    const [loading, setLoading] = useState(false)

    const getFromCache = () => {
        return JSON.parse(localStorage.getItem('movies.data')) || []
    }

    const saveToCache = (data) => {
        localStorage.setItem('movies.data', JSON.stringify(data))
    }

    const [movies, setMovies] = useState(getFromCache())

    const search = async (query) => {
        setLoading(true)
        const result = await OmdbService.Search(query)
        setLoading(false)
        if (result.Response === "True") {
            saveToCache(result.Search)
            setMovies(result.Search)
            setFailed(false)
        } else {
            setFailed(true)
        }
    }

    return <>
        <Search searchAction={search} />
        <div className="container">
            <div className="row">
                {failed && <Info icon="frown" message="An error just happened" />}
                {loading && <Info icon="long-arrow-down" message="Please wait..." />}
                {!loading && movies.length === 0 && !failed && <Info icon="search" message="Search for any movie by its name" />}
                {!loading && movies.map((movie, index) => <Card key={index} Title={movie.Title} Year={movie.Year} Poster={movie.Poster} imdbID={movie.imdbID} />)}
            </div>
        </div>
    </>
}

export default Home
