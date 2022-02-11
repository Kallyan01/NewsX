import React from 'react';
import './Gridview.css'
function Gridview({ newslist }) {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 ">
        <div className='lg-cell cell-theme  bg-blue-400 col-span-2 row-span-6 ' >
          <a href={newslist[0].url} target="_blank" rel="noopener noreferrer">
            <img src={newslist[0].urlToImage} alt="" />
            <p>{newslist[0].title}</p>
          </a>
        </div>
        <div className='sm-cell cell-theme bg-blue-400 row-span-3'>
          <a href={newslist[1].url} target="_blank" rel="noopener noreferrer">
            <img src={newslist[1].urlToImage} alt="" />
            <p>{newslist[1].title}</p>
          </a>
        </div>
        <div className='sm-cell cell-theme bg-blue-400 row-span-3'>
          <a href={newslist[2].url} target="_blank" rel="noopener noreferrer">
            <img src={newslist[2].urlToImage} alt="" />
            <p>{newslist[2].title}</p>
          </a>
        </div>
        <div className='sm-cell cell-theme bg-blue-400 row-span-3'>
          <a href={newslist[3].url} target="_blank" rel="noopener noreferrer">
            <img src={newslist[3].urlToImage} alt="" />
            <p>{newslist[3].title}</p>
          </a>
        </div>
        <div className='sm-cell cell-theme bg-blue-400 row-span-3'>
          <a href={newslist[4].url} target="_blank" rel="noopener noreferrer">
            <img src={newslist[4].urlToImage} alt="" />
            <p>{newslist[4].title}</p>
          </a>
        </div>
      </div>
    </>
  )
}

export default Gridview;
