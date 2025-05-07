import React from 'react';
import './Home.css';
import StockAccountant from 'pages/stockAccountant/StockAccountant';
import DataCleaner from 'pages/dataCleaner/DataCleaner';
import Werkvoorbereider from 'pages/werkvoorbereider/Werkvoorbereider';
import Timmerman from 'pages/timmerman/Timmerman';
import ProductionAccountant from 'pages/productionAccountant/ProductionAccountant';
import FinancieelAdministrateurSA from 'pages/FinancieelAdministrateurSA/FinancieelAdministrateurSA';
import FinancieelAdministrateurNL from 'pages/financieelAdministrateurNL/FinancieelAdministrateurNL';

function Home() {

    return (
        <div>            
            <section className="Home">
                <h3>Welkom op mijn profiel</h3>
                <p>Je kunt hier mijn cv bezichtigen.</p>         
            </section>
            <FinancieelAdministrateurNL/>
            <br />
            <br />
            <br />
            <DataCleaner/>
            <br />
            <br />
            <br />
            <Werkvoorbereider/>
            <br />
            <br />
            <br />         
            <Timmerman/>
            <br />
            <br />
            <br />
            <StockAccountant/>
            <br />
            <br />
            <br />
            <ProductionAccountant/>
            <br />
            <br />
            <br />
            <FinancieelAdministrateurSA/>     
        </div>
    );
}

export default Home;