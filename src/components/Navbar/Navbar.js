import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Globalcontext/Contextapi';
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { RiMenu3Fill } from 'react-icons/ri'
import Searchbox from '../Body/Widgets/Searchbox';
function Navbar() {
    const { val1, val2 } = useContext(GlobalContext)
    const [Navopen, setNavopen] = val1
    const [Searchboxpos, setSearchboxpos] = val2
    const [Active, setActive] = useState(false)
    // const navmenu = {
    //     transform: `translateY(${Navopen}%)`
    // }
    // let changecolor = () => {
    //     console.log(window.scrollY)
    //     if (window.scrollY >= 100)
    //         setActive(true)
    //     else
    //         setActive(false)
    // }
    // window.addEventListener('scroll', changecolor)
    return (
        <nav className={Active === true ? "navbar active" : "navbar"}>
            <div className="nav-icon">
                <p><span>N</span>ews<span>X</span></p>
            </div>
            {/* <div className="nav-menu">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/Trending'>Trending</NavLink>
                <NavLink to='/Livetv'>LiveTv</NavLink>
                <NavLink to='/Aboutus'>AboutUs</NavLink>
            </div> */}
            <div className="searchicon">
                <i class={Searchboxpos === 0 ? 'fas fa-search' : 'fas fa-times-circle'} onClick={() => Searchboxpos === 0 ? setSearchboxpos(100) : setSearchboxpos(0)}></i>
            </div>
            {/* <div className="mob-nav-menu" style={navmenu}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/Trending'>Trending</NavLink>
                <NavLink to='/Livetv'>LiveTv</NavLink>
                <NavLink to='/Aboutus'>AboutUs</NavLink>
            </div> */}
            {/* <div className="menu-btn">
                <RiMenu3Fill onClick={() => { Navopen === -100 ? setNavopen(0) : setNavopen(-100) }} />
            </div> */}
            <Searchbox />
        </nav>
    )
}

export default Navbar;
