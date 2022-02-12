import React from 'react'

function Listarticle(props) {
    return (props.loading === false ? (
        <div className="listarticle">
            <div className="thumbnail">
                <img src={props.image} alt="" srcset="" />
            </div>
            <div className="article-des">
                <p className="category">{props.tag}</p>
                <p className="title">{props.title}</p>
                <p className="publish-date">{props.date}</p>
            </div>
        </div>) : (
        <div className="listarticle">
            <div className="loading-thumbnail">
                
            </div>
            <div className="article-des">
                <p className="loading-category"></p>
                <p className="loading-title">
                    <div className="loading-line"></div>
                    <div className="loading-line"></div>
                </p>
                <p className="loading-date"></p>
            </div>
        </div>
    )
    )
}

export default Listarticle