import React from 'react';
import { Link } from 'react-router-dom';

function Boekhouder () {
    return (
        <div>
            <div className='Grid-display'>
                <div className='test'>
                    <section>
                        <h3>Financieel administrateur <span>- Lithium Safety Containers</span></h3>
                        <ul>
                            <li>Administratie van 4 vennootschappen.</li>
                            <li>Verwerken van inkomende en uitgaande facturen.</li>
                            <li>Beheren van crediteuren- en debiteurenadministratie.</li>
                            <li>Assisteren bij het opstellen van financiële rapportages en jaarrekeningen.</li>
                            <li>Uitvoeren van banktransacties en het beheren van kasstromen.</li>
                            <li>Ondersteunen bij het opstellen en controleren van budgetten en forecasts.</li>
                            <li>Verzorgen van BTW-aangiften en andere fiscale verplichtingen.</li>
                            <li>Bijdragen aan de optimalisatie van financiële processen en procedures.</li>            
                        </ul>
                    </section>
                    <section className='section'>
                        <p><b>Referentie: </b>b.vanbeers@lithiumsafetycontainers.com (eigenaar)</p>
                    </section>
                </div>
                <Link to="https://www.lithiumsafetycontainers.nl" className='iframe-link'>
                <iframe title="Photo" src="https://www.lithiumsafetycontainers.nl"></iframe>
                </Link>            
            </div>
            <div className='iframe-div'>
                <iframe title="Dashboard-PK" src="https://docs.google.com/spreadsheets/d/11yLmO3SV6ec7EbvlEo39hJkgVDIKak9pHQo8ZauztqM/edit?gid=59831044#gid=59831044"></iframe>
            </div>
        </div>
    )
}

export default Boekhouder;