import React from 'react';
import image from '../../assets/J.Boonzaaijer.png';
import { Link } from "react-router-dom";

function Timmerman () {
    return (
        <div className='Grid-display'>
    <body>
    <h3>Assistent Werkvoorbereider</h3>
        <ul>
            <li>Bestellen van materialen.</li>
            <li>Opstellen notulen van vergaderingen met taakverdeling.</li>
            <li>Wekelijks updaten van taakverdeling.</li>
            <li>Controle van begroting en verbetering van formaat en samenstelling.</li>
            <li>Contact met andere partijen over uitstaande documenten.</li>
            <li>Afdrukken van bouwtekeningen en klassering van alle documenten in mappen.</li>
            <li>Nemen van foto’s van opgeleverd werk.</li>
            <li>Lezen van bouwtekeningen.</li>
            <li>Opstellen van keuringsplannen en formulieren.</li>
            <li>Opstellen van concepttekeningen.</li>
            <li>Bijhouden van telefoonlijst.</li>
            <li>Timmerwerkzaamheden.</li>
        </ul>
    </body>
    <div>
    <Link to="https://boonzaaijerbv.nl/">
        <img className="website" src={image} alt=""/>
    </Link>     
    </div>
</div>

    )
}

export default Timmerman;