import React from 'react'

const Info = (props) => {
    return <div className="container text-center">
        <h1 className="display-1 mb-4">
            <i className={"fad fa-" + props.icon} />
        </h1>
        <h1>{props.message}</h1>
    </div>
}

export default Info
