import './Navbar.css'
import React, {useState, useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";

function Nav() {

    const isMediumToLargeDevice = useMediaQuery(
        "only screen and (min-width : 769px) and (max-width : 1200px)");

    const [ mobileMenu, toggleMobileMenu] = useState(true);

    function showMobileMenu() {
        toggleMobileMenu( prev => !prev)    
    }

    // Closes togglemenu when user forgot to close it and screensize changes
    useEffect(() => {
        if (!mobileMenu) {toggleMobileMenu(isMediumToLargeDevice)}
    }, [isMediumToLargeDevice])

        return (
        <header>
            <div className="navbar">
                <nav>
                    <ul>
                        <Link className="homepage" to="/">Homepage</Link>
                        <Link className="mobile-homepage" to="/">
                            <div className="material-symbols-outlined">House</div>
                        </Link>
                    </ul>
                    <ul>
                        <li>
                            <NavLink className={ ( { isActive } ) => isActive ? "link--active" : "link--default" }
                                    to="/OverOns">Over ons</NavLink>                
                        </li>
                    </ul>            
                    <ul>
                        <li>  
                            <button className='toggle-menu' type='button' onClick={showMobileMenu} >
                                <NavLink className={ ( { isActive } ) => isActive ? "link--active" : "link--default" }
                                            to="WatWijDoen">Wat wij doen</NavLink>
                            </button>
                            <ul className={ mobileMenu ? 'menu' : 'mobile-menu'}>                                
                                <li>
                                    <NavLink className={ ( { isActive } ) => isActive ? "link--active" : "link--default" }
                                            to="/Aanbouw">Aanbouw</NavLink>
                                </li>    
                                <li>
                                    <NavLink className={ ( { isActive } ) => isActive ? "link--active" : "link--default" }
                                            to="/Nieuwbouw">Nieuwbouw</NavLink>
                                </li>
                                <li>
                                    <NavLink className={ ( { isActive } ) => isActive ? "link--active" : "link--default" }
                                            to="/Verbouw">Verbouw</NavLink>
                                </li>                        
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink className={ ( { isActive } ) => isActive ? "link--active" : "link--default" }
                                    to="/Contact">Contact</NavLink>                
                        </li>
                    </ul>                               
                </nav>
            </div>
        </header>
    )
}

export default Nav;