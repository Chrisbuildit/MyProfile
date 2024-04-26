import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";

//Not working:
// import Dayschedule from '../../Components/dayschedule/Dayschedule'

function Home() {

    return (
        <div className='Woonwijk'>            
            <section className="Home">
                <h3>Welkom bij 
                    aannemersbedrijf X</h3>
                <p >Wij zijn een aannemersbedrijf met jaren ervaring die over velen generaties strekken.</p>         
            </section>
            {/* <Dayschedule/> */}
            <Link className="arrow" to="/homeExtension">
                <div className="material-symbols-outlined">Navigate_Next</div>
            </Link>            
            <iframe className='iframe' src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRwhzWqXRnT-lTXiP0VIkQZz_jALUJU6QJsuFcthCE4LGDm6rF_h91sDYu1eh0ipxeRtA02my7hKMf-/pubhtml?widget=true&amp;headers=false"></iframe>
            <a href="https://docs.google.com/spreadsheets/d/1-TKVBj99zergQ1_ovq6b6bLd72ZosCFLJXYG3HTmYEw/edit#gid=0"> 
            <button className='button'>Open in google sheet!</button> </a>
        </div>
    );
}

export default Home;