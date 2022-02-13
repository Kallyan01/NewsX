import React from 'react'

function Listarticle(props) {
    return (
        <div className="listarticle">
            <div className="thumbnail">
                <img src={props.image} alt="" srcset="" />
            </div>
            <div className="article-des">
                <p className="category">{props.tag}</p>
                <p className="title">
                    <a href={props.url} target="_blank" rel="noopener noreferrer"> 
                    {props.title}
                    </a>
                </p>
                <p className="publish-date">{props.date}</p>
            </div>
        </div>
    )
}

export default Listarticle