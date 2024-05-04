import React from 'react';
import image1 from '../../assets/productionAccountant/Devon-Mill-PM.webp';
import { Link } from "react-router-dom";

function ProductionAccountant () {
    return (
        <div className='Grid-display'>
            <div>
                <h3>Production Accountant</h3>
                <ul>
                    <li>Afstemmen van dagelijkse en maandelijkse productiecijfers.</li>
                    <li>Calculatie van technische productie-prestaties.</li>
                    <li>Vastleggen van productiecijfers in het ERP-systeem.</li>
                    <li>Schrijven van notulen tijdens productieoverleg en bestuursvergaderingen.</li>
                    <li>Aankopen van voldoende graan hoeveelheden.</li>
                    <li>Afstemming van graan aankopen in ERP systeem.</li>
                    <li>Begroting voorbereiding door middel van begroting schedules.</li>
                    <li>Inventarisatie facilitering en verschillen onderzoek.</li>
                    <li>Vaststellen van benodigde verpakkingsmateriaal voor aankopen.</li>
                    <li>Opstellen van financiële jaarrekening en verslagen.</li>
                    <li>Maandelijkse analyse van winst- en verliescijfers.</li>
                    <li>Inplannen van levering aan cliënten.</li>
                    <li>Bijhouden van kritieke reserve onderdelen in voorraad.</li>
                    <li>Specificatie van te gebruiken grootboekrekeningen voor aankopen.</li>
                    <li>Updaten van onderhoudwerkstaten.</li>
                    <li>Maandelijkse technische prestatierapporten.</li>
                    <li>Pallet administratie en afstemming.</li>
                </ul>
            </div>
            <Link to="https://www.pridemilling.co.za/">
            <img className='image' src={image1} alt=""/>
            </Link>   
        </div>

    )
}

export default ProductionAccountant;