import React from 'react'
import './Searcharticle.css'
function Searcharticle(props) {
    return (
        <div className="sh-listarticle">
            <div className="sh-thumbnail">
                <img src={props.image} alt="" srcset="" />
            </div>
            <div className="sh-article-des">
                <p className="sh-category">{props.tag}</p>
                <p className="sh-title">
                    <a href={props.url} target="_blank" rel="noopener noreferrer"> 
                    {props.title}
                    </a>
                </p>
                <p className="sh-publish-date">{props.date}</p>
            </div>
        </div>
    )
}

export default Searcharticle