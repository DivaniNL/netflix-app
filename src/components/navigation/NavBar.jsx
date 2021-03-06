import React from 'react';
import '../../scss/NavBar.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGift, faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import SearchInput from './SearchInput.jsx'

const NavBar = (props) => {
    return (
        <nav className="nav-wrapper  darken-3 netflix-nav" id="netflix-nav">
            <div className="container">
                <a className="left logo">
                    <img src="images/1b4576f3d6235ba1a76bab39f3916b74.png"></img>
                </a>
                <div className="navs">
                    <ul className="left netflix-left-nav">
                    
                        <li><NavLink className="navlink" to="/">Home</NavLink></li>
                        <li><NavLink className="navlink" to="/series">Series</NavLink></li>
                        <li><NavLink className="navlink" to="/films">Films</NavLink></li>
                        <li><NavLink className="navlink" to="/horror">Horror</NavLink></li>
                        <li><NavLink className="navlink" to="/kids">Kids</NavLink></li>
                        <li><NavLink className="navlink" to="/newandpopular">New And Popular</NavLink></li>
                        <li><NavLink className="navlink" to="/mylist">My List</NavLink></li>
                    </ul>
                    <div className="right netflix-right-nav">
                        <div>
                            <SearchInput handleSubmit={props.handleSubmit} handleChange={props.handleChange} />
                            <a><FontAwesomeIcon className="fontawesome-netflix-nav" icon={faSearch} /></a>
                        </div>
                        <div><a><FontAwesomeIcon className="fontawesome-netflix-nav" icon={faGift} /></a></div>
                        <div><a><FontAwesomeIcon className="fontawesome-netflix-nav" icon={faBell} /></a></div>
                        <div><a><img className="pf" src="images/testprofile.png"></img>&nbsp;<FontAwesomeIcon icon={faChevronDown} /></a></div>
                    </div>
                </div>
            </div>
        </nav>
    )
    
}
export default NavBar;