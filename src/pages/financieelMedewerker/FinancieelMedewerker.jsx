import React from 'react';
import { Link } from "react-router-dom";

function FinancieelMedewerker () {

    return (
        <div>
            <div className='Grid-display'>
                <div className='test'>
                    <section>
                        <h3>Financieel medewerker</h3>
                        <ul>
                            <li>Crediteurenbeheer en giftenadministratie.</li>
                            <li>Beantwoorden en verwerken van alle inkomende mails.</li>
                            <li>Incidenteel facturatie en debiteurenbeheer.</li>
                            <li>Voorbereiden van betalingen en bankafschrift verwerking.</li>
                            <li>Samenstellen van journaalposten in Excel en het importeren in Exact.</li>
                            <li>Vinden van banktransacties die Exact niet heeft geïmporteerd.</li>
                            <li>Opschonen van alle tussenrekeningen.</li>
                            <li>Ondersteuning bij maandrapportages, jaarrekening en accountantscontrole.</li>
                            <li>Meedenken over procesverbeteringen en het bijhouden van procedures.</li>                            
                        </ul>
                    </section>
                    <section className='section'>
                        <p><b>Referentie: </b>alice_vliek@worldvision.nl</p>
                    </section>
                </div>
                <div className='iframe-link'>
                    <iframe title="Photo" src="https://www.worldvision.nl/"/>
                </div>            
            </div>
        </div>
    )
}

export default FinancieelMedewerker;