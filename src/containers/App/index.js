import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home'
import Movie from '../Movie'

const App = () => {
    return <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies/:movieId" component={Movie} />
    </Switch>
}

export default App
