import React from 'react'

function Articleone(props) {
    return (
        <div className="articleone">
            <div className="news-thumbnail">
                <img src={props.image} alt="" srcset="" />
            </div>
            <div className="news-title">
                <h2>{props.title}</h2>
                <p>{props.date}</p>
            </div>
            <div className="thumbnail-description">
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Articleone