import React from 'react';
import './Gridview.css'
function Gridview({newslist}) {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1 ">
                <div className='lg-cell cell-theme  bg-blue-400 col-span-2 row-span-6 ' >
                    <img src={newslist[0].urlToImage} alt=""  />
                    <p>{newslist[0].title}</p>
                </div>
                <div className='sm-cell cell-theme bg-blue-400 row-span-3'>
                  <img src={newslist[1].urlToImage} alt=""  />
                  <p>{newslist[1].title}</p>
                </div>
                <div className='sm-cell cell-theme bg-blue-400 row-span-3'>
                   <img src={newslist[2].urlToImage} alt=""  />
                   <p>{newslist[2].title}</p>
                </div>
                <div className='sm-cell cell-theme bg-blue-400 row-span-3'>
                  <img src={newslist[3].urlToImage} alt=""  />
                  <p>{newslist[3].title}</p>
                </div>
                <div className='sm-cell cell-theme bg-blue-400 row-span-3'>
                  <img src={newslist[4].urlToImage} alt=""  />
                  <p>{newslist[4].title}</p>
                </div>
            </div>
        </>
    )
}

export default Gridview;
