import React from 'react';

function DataCleaner () {
    return (
        <div>
            <body>
            <h3>DataCleaner</h3>
                <ul>
                    <li>Verschonen van product informatie</li>
                    <li>Aanvragen van ontbrekende product informatie bij leveranciers</li>
                    <li>Opstellen van dashboard met behulp van Pivot tables in Excel</li>
                    <li>Matchen van item codes mbv v-lookup</li>
                    <li>Collega’s en leidinggevende helpen met excel</li>
                    <li>Data bewerken met Power Query</li>
                </ul>
            </body>
                <div className='iframe-div'>
                    <iframe className="iframe" title="Dashboard-PK" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTjn6zH3gB7C9et33Z4nR4ic5AXOGXd_jFXZO1wZlF6LbN-zdeddUussrF6_b6jSJsdRjExq8PSTLu-/pubhtml?widget=true&amp;headers=false"></iframe>
                </div>
        </div>
    )
}

export default DataCleaner;