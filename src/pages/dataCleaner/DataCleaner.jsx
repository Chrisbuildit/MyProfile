import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/Paardekooper.jpg';

function DataCleaner () {
    return (
        <div>
            <div className='Grid-display'>
                <body>
                <h3>DataCleaner</h3>
                    <ul>
                        <li>Verschonen van product informatie.</li>
                        <li>Aanvragen van ontbrekende product informatie bij leveranciers.</li>
                        <li>Opstellen van dashboard met behulp van Pivot tables in Excel.</li>
                        <li>Matchen van item codes mbv v-lookup en index&match formule.</li>
                        <li>Collega’s en leidinggevende helpen met excel.</li>
                        <li>Data bewerken met Power Query.</li>
                    </ul>
                </body>
                <Link to="https://www.paardekooper.nl/">
                    <img className='image' src={image} alt=""/>
                </Link>            
            </div>
            <div className='iframe-div'>
                <iframe title="Dashboard-PK" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTjn6zH3gB7C9et33Z4nR4ic5AXOGXd_jFXZO1wZlF6LbN-zdeddUussrF6_b6jSJsdRjExq8PSTLu-/pubhtml?widget=true&amp;headers=false"></iframe>
            </div>
        </div>
    )
}

export default DataCleaner;