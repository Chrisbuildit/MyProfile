import React from 'react';
import { Link } from "react-router-dom";
import image from '../../assets/G4SDeposita.jpg'

function StockAccountant () {
    return (
        <div className='Grid-display'>
            <div>
            <h3>Stock Accountant</h3>
                <ul>
                    <li>Voorraad aankopen, beheer, controle en optimalisatie.</li>
                    <li>Maken van serienummers voor vervaardigde producten.</li>
                    <li>Factureren en crediteren van geleverde producten.</li>
                    <li>Opstellen en bijhouden van stuklijsten.</li>
                    <li>Inventarisatie van aanwezige voorraad en onderzoek naar verschillen.</li>
                    <li>Toezicht op de magazijnvoorraad.</li>
                    <li>Opstellen van productie ramingen.</li>
                    <li>Onderhandelen met leveranciers voor betere prijzen.</li>
                    <li>Kostenberekening van vervaardigde producten.</li>
                    <li>Verslaggeving ten aanzien van huurproducten.</li>
                    <li>Traceren van lease-producten.</li>
                    <li>Assisteren van externe accountant tijdens jaarrekeningcontrole.</li>
                    <li>Balansafstemming ten aanzien van lease-producten.</li>
                    <li>Afstemming van voorraadlijsten met grootboekrekening voorraad.</li>
                    <li>Deelname en rapportering wekelijkse productieoverleg.</li>
                    <li>Maandelijks afstemmen van verkooptransacties met inkooptransacties.</li>
                    <li>Opstellen van bestuursverslag m.b.t. maandelijkse verkoopcijfers per categorie.</li>
                </ul>   
            </div>          
        <Link to="https://deposita.co.za/company/">
            <img className='image' src={image} alt=""/>
        </Link>            
    </div>
    )
}

export default StockAccountant;