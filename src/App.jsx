import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/home/Home';
// import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import StockAccountant from 'pages/stockAccountant/StockAccountant';
import DataCleaner from 'pages/dataCleaner/DataCleaner';
import Werkvoorbereider from 'pages/werkvoorbereider/Werkvoorbereider';
import Timmerman from 'pages/timmerman/Timmerman';
import ProductionAccountant from 'pages/productionAccountant/ProductionAccountant';
import FinancieelAdministrateurNL from 'pages/financieelAdministrateurNL/FinancieelAdministrateurNL';
import CV from './pages/CV';
import FinancieelAdministrateurSA from 'pages/FinancieelAdministrateurSA/FinancieelAdministrateurSA';
import BoekhouderTemp from 'pages/boekhouder/BoekhouderTemp';

const queryClient = new QueryClient();

function App() {

        return (
        // To use React-Query anywhere in the app, I first need to wrap my main component into QueryClientProvider.
        <QueryClientProvider client={queryClient}>
            <>
                {/* <NavBar /> */}
                <main>
                    <Routes>
                            <Route path="/" element={ <CV/> }/>
                            <Route path="/home" element={ <Home/> }/>                                                       
                            <Route path="/stockAccountant" element={ <StockAccountant/> }/>
                            <Route path="/productionAccountant" element={ <ProductionAccountant/> }/>
                            <Route path="/werkvoorbereider" element={ <Werkvoorbereider/> }/>
                            <Route path="/timmerman" element={ <Timmerman/> }/>
                            <Route path="/financieelAdministrateurSA" element={ <FinancieelAdministrateurSA/> }/>
                            <Route path="/datacleaner" element={ <DataCleaner/> }/>
                            <Route path="/financieelAdministrateurNL" element={ <FinancieelAdministrateurNL/> }/>
                            <Route path="/boekhouder" element={ <BoekhouderTemp/> }/> 
                    </Routes>
                </main>                
                <Footer />
            </>
        </QueryClientProvider>
        
    )
}

export default App;
