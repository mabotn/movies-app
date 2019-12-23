import React from 'react'
import { Link } from 'react-router-dom'

var Card = function (props) {
    return <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="card mb-4">
            <img src={props.Poster} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.Title}</h5>
                <p className="card-text">Released in {props.Year}</p>
                <Link to={'/movies/' + props.imdbID} className="btn btn-primary">See details</Link>
            </div>
        </div>
    </div>
}

export default Card