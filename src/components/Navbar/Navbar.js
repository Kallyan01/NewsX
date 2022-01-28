import React,{useContext} from 'react';
import { GlobalContext } from '../Globalcontext/Contextapi';
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import {RiMenu3Fill} from 'react-icons/ri' 
function Navbar() {
    const { val1 } = useContext(GlobalContext)
    const [Navopen, setNavopen] = val1
    const navmenu={
        transform: `translateY(${Navopen}%)`
    }
    return (
        <nav className="navbar">
            <div className="nav-icon">
                <p><span>N</span>ews<span>X</span></p>
            </div>
            <div className="nav-menu">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/Trending'>Trending</NavLink>
                <NavLink to='/Livetv'>LiveTv</NavLink>
                <NavLink to='/Aboutus'>AboutUs</NavLink>
            </div>
            <div className="mob-nav-menu" style={navmenu}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/Trending'>Trending</NavLink>
                <NavLink to='/Livetv'>LiveTv</NavLink>
                <NavLink to='/Aboutus'>AboutUs</NavLink>
            </div>
            <div className="menu-btn">
               <RiMenu3Fill onClick={()=>{Navopen===-100?setNavopen(0):setNavopen(-100)}}/>
            </div>
        </nav>
    )
}

export default Navbar;
