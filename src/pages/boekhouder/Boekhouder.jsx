import React from 'react';
import { Link } from 'react-router-dom';

function Boekhouder () {
    return (
        <div>
            <div className='Grid-display'>
                <div className='test'>
                    <section>
                        <h3>Boekhouder <span>- Lithium Safety Containers</span></h3>
                        <ul>
                            <li>Verschonen van product informatie.</li>                          
                        </ul>
                    </section>
                    <section className='section'>
                        <p><b>Referentie: </b>b.vanbeers@lithiumsafetycontainers.com (eigenaar)</p>
                    </section>
                </div>
                <Link to="https://www.lithiumsafetycontainers.nl" className='iframe-div'>
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