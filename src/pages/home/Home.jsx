import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import StockAccountant from 'pages/stockAccountant/StockAccountant';
import DataCleaner from 'pages/dataCleaner/DataCleaner';
import Werkvoorbereider from 'pages/werkvoorbereider/Werkvoorbereider';
import Timmerman from 'pages/timmerman/Timmerman';
import ProductionAccountant from 'pages/productionAccountant/ProductionAccountant';
import FinancieelAdministrateur from 'pages/financieelAdministrateur/FinancieelAdministrateur';

function Home() {

    return (
        <div>            
            <section className="Home">
                <h3>Welkom op mijn profiel</h3>
                <p>Je kunt hier mijn cv bezichtigen.</p>         
            </section>
            <DataCleaner/>
            <Werkvoorbereider/>            
            <Timmerman/>
            <StockAccountant/>
            <ProductionAccountant/>
            <FinancieelAdministrateur/>     
        </div>
    );
}

export default Home;