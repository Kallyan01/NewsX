import React from 'react'

function Listarticle(props) {
    return (
        <div className="listarticle">
            <div className="thumbnail">
                <img src={props.image} alt="" srcset="" />
            </div>
            <div className="article-des">
                <p className="category">{props.tag}</p>
                <p className="title">{props.title}</p>
                <p className="publish-date">{props.date}</p>
            </div>
        </div>
    )
}

export default Listarticle