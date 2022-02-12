import React, { useEffect, useState } from 'react'
import Articleone from './articlecards/Articleone'
import Listarticle from './articlecards/Listarticle'
import axios from 'axios'
function Science() {
  const [Data, setData] = useState([])
  const url = 'https://globapi.herokuapp.com/onenews?category=science&country=in'
  useEffect(() => {
    async function callapi() {
      let req = await axios.get(url)
        .then(res => {
          setData(res.data.articles)
          console.log(Data)
        })
    }
    callapi();
  }, [])
  return (
    <div className="catagory-news">
       {
        Data.map((elm, idx) => {
          if (idx==0)
            return <Articleone title={Data[0].title} date={Data[0].publishedAt} image={Data[0].urlToImage} description={Data[0].description}/>
        })
    }
      <div className="articlist">
        {
          Data.map((elm, idx) => {
            if (idx <=6 && idx!=0)
              return <Listarticle tag={'Science'} title={elm.title} date={elm.publishedAt} image={elm.urlToImage} />
          })
        }
      </div>
    </div>
  )
}

export default Science