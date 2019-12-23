import React, { useState } from 'react'

var Search = function (props) {
    const [query, setQuery] = useState('')

    const queryChanged = (e) => {
        setQuery(e.target.value)
    }

    const onSearch = (e) => {
        if (query.length > 0)
            props.searchAction(query)
        else
            alert('Search query is mandatory')
        e.preventDefault()
    }

    return <form className="jumbotron container mt-4" onSubmit={onSearch}>
        <h1 className="mb-4">Open Movies Database</h1>
        <input className="form-control" onChange={queryChanged} value={query} placeholder='eg. Frozen' />
    </form>
}

export default Search