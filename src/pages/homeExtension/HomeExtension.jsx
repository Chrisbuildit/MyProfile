import React from 'react';
import './HomeExtension.css'
// import image from './../../Assets/BlockWall.jpg';
import { Link } from "react-router-dom";

function HomeExtension () {
return (
    <div>
    {/* <img className="image" src={image}/> */}
    <Link className="arrow" to="/">
        <div className="material-symbols-outlined">Navigate_Next</div>
    </Link>
    </div>
);

}

export default HomeExtension;