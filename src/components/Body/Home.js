import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Gridview from './Widgets/Gridview'
import { TailSpin } from 'react-loader-spinner'
import './Home.css'
import Weather from './Widgets/Weather';
import Sports from './Widgets/Sports';
import Social from './Widgets/Social';
import Catagory from './Widgets/Catagory';
import Footer from '../Footer/Footer';
function Home() {
  const url = 'https://globapi.herokuapp.com/news';
  const [News, setNews] = useState([])
  const [Loading, setLoading] = useState(true)
  useEffect(() => {
    async function getdata() {
      let data = await axios.get(url)
        .then((data) => {
          console.log(data)
          setNews(data.data.articles)
          setLoading(false)
        })
        .catch((err) => console.log(err))
    }
    getdata();
  }, []);
  // function getwidth() {
  //   console.log(window.innerWidth)
  // }
  // window.addEventListener('resize', getwidth)
  return (
    <div className='home'>
      <Navbar />
      <div className="landing-body">
        {

          Loading === true ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1 ">
              <div className='lg-cell  bg-gray-200 col-span-2 row-span-6 ' >
                <TailSpin color="#00BFFF" height={60} width={60} />
              </div>
              <div className='sm-cell bg-gray-200 row-span-3'>
                <TailSpin color="#00BFFF" height={60} width={60} />
              </div>
              <div className='sm-cell bg-gray-200 row-span-3'>
                <TailSpin color="#00BFFF" height={60} width={60} />
              </div>
              <div className='sm-cell bg-gray-200 row-span-3'>
                <TailSpin color="#00BFFF" height={60} width={60} />
              </div>
              <div className='sm-cell bg-gray-200 row-span-3'>
                <TailSpin color="#00BFFF" height={60} width={60} />
              </div>
            </div>
          ) : (
            <Gridview newslist={News} />
          )

        }
        <div className="list-news grid grid-cols-2 md:grid-cols-4 gap-1 ">
          <div className='lg-body-cell bg-gray-50 col-span-2 md:col-span-3  row-span-6 ' >
            <Catagory />
          </div>
          <div className='sm-body-cell bg-gray-50 col-span-2 md:col-span-1 row-span-6'>
            <Social />
            <Weather />
            <Sports />
          </div>
        </div>
        {/* <div className="catsocial">
          <div className="catagory">
            <Catagory />
          </div>
          <div className="sidebar">
            <Social />
            <Weather />
            <Sports />
          </div>
        </div> */}
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home;
