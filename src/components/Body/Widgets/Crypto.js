import React, { useEffect, useState } from 'react';
import './Crypto.css'
import axios from 'axios';
function Crypto() {
  const [Data, setData] = useState([])
  useEffect(() => {
    const url = 'https://globapi.herokuapp.com/crypto'
    async function getdata() {
      let data = await axios.get(url)
        .then((data) => {
          console.log(data)
          setData(data.data)
          // setLoading(false)
        })
        .catch((err) => console.log(err))
    }
    getdata();
  }, []);
  return (
    <div className='crypto'>
      <div className="wid-title">
        <h3>Crypto Currency</h3>
      </div>
      {
        Data.map((elm) => {
          return (
            <div className='crypto-coin'>
              <div className="icon">
                <img src={elm.logo_url} alt="coin_url" />
              </div>
              <div className="nameprice">
                <div className="name">
                  {elm.name}
                </div>
                <div className="price">
                  <p>
                    {Math.ceil(elm.price)}
                  </p>
                  <span>
                    ₹
                  </span>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Crypto;
