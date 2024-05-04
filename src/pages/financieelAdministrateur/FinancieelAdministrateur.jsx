import React from 'react';
import image from '../../assets/Aros.jpg';
import { Link } from "react-router-dom";

function FinancieelAdministrateur () {
    return (
        <div className='Grid-display'>
            <div>
                <h3>Financieel administrateur</h3>
                <ul>
                    <li>Verantwoordelijk voor de gehele financiële administratie.</li>
                    <li>Opstellen van Winst- en verliesrekening, balans en kasstroomoverzicht.</li>
                    <li>Maandelijks samenstellen en presenteren van afdeling-begrotingen en bestedingen.</li>
                    <li>Monitoren van kasstroom.</li>
                    <li>Bepalen van benodigd kapitaal voor vaste activa.</li>
                    <li>Boeking van correctie journalen en afstemming van de grootboekrekeningen.</li>
                    <li>Voorraadadministratie van studieboeken die te koop aangeboden werden.</li>
                    <li>Volledige crediteurenadministratie met afstemming van rekeningen.</li>
                    <li>Volledige debiteurenadministratie insluitende ontvangsten en facturering.</li>
                    <li>Indienen van belastingopgaven en afstemmingen belastingrekeningen.</li>
                    <li>Bijhouden van het vaste activaregister en het afschrijvingsschema.</li>
                    <li>Verzekering administratie.</li>
                    <li>Ontwikkelen van vormen, procedures, regelgeving en beleid.</li>
                    <li>Opstellen van informatiesystemen in Microsoft Access.</li>
                    <li>Berekenen van schoolgelden.</li>
                    <li>Samenstellen van loonlijst en opstellen loonstroken.</li>
                    <li>Indienen van verslagen aan derde partijen zoals banken, belastingdienst.</li>
                </ul>
            </div>
            <Link to="https://www.aros.ac.za/">
                <img className="Aros" src={image} alt=""/>
            </Link>   
        </div>


    )
}

export default FinancieelAdministrateur;