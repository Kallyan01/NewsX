import React, { useContext, useEffect, useState } from 'react'
import './Searchbox.css'
import { GlobalContext } from '../../Globalcontext/Contextapi'
import Searcharticle from './Catagory/articlecards/Searcharticle'
import axios from 'axios'
function Searchbox() {
    let { val2 } = useContext(GlobalContext)
    const [Loading, setLoading] = useState(false)
    const [Searchbox, setSearchbox] = val2
    const [Searchtxt, setSearchtxt] = useState('')
    const [Result, setResult] = useState([])
    useEffect(() => {
        if(Searchtxt.length >=0)
         setLoading(true)
        const searchurl = `https://globapi.herokuapp.com/search?text=${Searchtxt}`
        const freq = setTimeout(async () => {
            let req = await axios.get(searchurl)
            .then(res => {
                    setLoading(false)
                    setResult(res.data.articles)
                    console.log(Result)
                })
        }, 3000);
        return () => {
            clearTimeout(freq);
        }
    }, [Searchtxt])


    let sbox = {
        opacity: `${Searchbox}%`,
        display: `${Searchbox === 100 ? ('block') : ('none')}`
    }
    return (
        <div className="searchbox" style={sbox}>
            <div className="searchinput">
                <input type="text" name="" value={Searchtxt} onChange={(e) => setSearchtxt(e.target.value)} id="" placeholder='Search Here....' />
                <i className="fas fa-search"></i>
            </div>
            <div className="searchresult">
                {
                    Searchtxt.length > 0 && Loading === true ? (
                        <div className="Loader">
                            <div className="shelf">
                                <ul className="books">
                                    <li className="book one searching"></li>
                                    <li className="book two searching"></li>
                                    <li className="book three searching"></li>
                                    <li className="book four searching"></li>
                                    <li className="book five searching"></li>
                                    <li className="book six searching"></li>
                                </ul>
                            </div>
                        </div>
                    )
                        :
                        (
                    
                            Searchtxt.length===0?(<></>):
                            (
                            Result.map((elm, idx) => {
                                return <Searcharticle key={elm.id} tag={elm.source.name} title={elm.title} date={elm.publishedAt} url={elm.url} image={elm.urlToImage} loading={Loading} />
                            }))
            
                            
                        )
                }
            </div>
        </div>
    )
}

export default Searchbox