import React,{useContext} from 'react'
import './Searchbox.css'
import { GlobalContext } from '../../Globalcontext/Contextapi'
function Searchbox() {
    let {val2} = useContext(GlobalContext)
    const [Searchbox,setSearchbox]= val2
    let sbox ={
        opacity: `${Searchbox}%`
    }
    return (
        <div className="searchbox" style={sbox}>
            <div className="searchinput">
                <input type="text" name="" id="" placeholder='Search Here....' />
                <i class="fas fa-search"></i>
            </div>
            <div className="searchresult">

            </div>
        </div>
    )
}

export default Searchbox