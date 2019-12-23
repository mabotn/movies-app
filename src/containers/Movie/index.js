import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import OmdbService from '../../services/omdb'

const Movie = (props) => {
    const [loaded, setLoaded] = useState(false)
    const [details, setDetails] = useState({})
    const { movieId } = useParams()

    useEffect(() => {
        if (!loaded)
            OmdbService.Details(movieId)
                .then((result) => {
                    setDetails(result)
                    console.log(result)
                })
        setLoaded(true)
    }, [loaded, movieId])

    return <>
        Hello
    </>
}

export default Movie
