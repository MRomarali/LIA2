import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"
import Logo from '../../img/LogoTransparent.png'

function Navigation(props) {
    return (
        <div>
             <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
            
            <ul id="nav" className="nav">
            <img className="LogoNav" src={Logo} alt="Logo"/>
                <Link to="/"><li><a className="current">Home</a></li></Link>
                <Link to="Om-oss"><li><a className="smoothscroll">Om oss</a></li></Link>
                <Link to="tjänster"><li><a className="smoothscroll" href="#resume">Tjänster</a></li></Link>
                <Link to="Referenser"><li><a className="smoothscroll">Referenser</a></li></Link>
                {/* <li><a className="smoothscroll" href="#contact">Kontakt</a></li> */}
            </ul>
        </nav>
        </div>
    )
}


export default Navigation

