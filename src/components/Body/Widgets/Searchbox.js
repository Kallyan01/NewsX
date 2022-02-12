import React, { useContext, useEffect, useState } from 'react'
import './Searchbox.css'
import { GlobalContext } from '../../Globalcontext/Contextapi'
import Listarticle from './Catagory/articlecards/Listarticle'
import axios from 'axios'
function Searchbox() {
    let { val2 } = useContext(GlobalContext)
    const [Loading,setLoading]=useState(true)
    const [Searchbox, setSearchbox] = val2
    const [Searchtxt, setSearchtxt] = useState('')
    const [Result, setResult] = useState([])
    useEffect(() => {
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
        display: `${Searchbox===100?('block'):('none')}`
    }
    return (
        <div className="searchbox" style={sbox}>
            <div className="searchinput">
                <input type="text" name="" value={Searchtxt} onChange={(e) => setSearchtxt(e.target.value)} id="" placeholder='Search Here....' />
                <i class="fas fa-search"></i>
            </div>
            <div className="searchresult">
                {
                    Result.map((elm, idx) => {
                        if (idx <= 10)
                            return <Listarticle tag={'Buisness'} title={elm.title} date={elm.publishedAt} image={elm.urlToImage} loading={Loading}/>
                    })
                }
            </div>
        </div>
    )
}

export default Searchbox