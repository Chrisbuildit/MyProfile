import React from 'react';
import { Link } from 'react-router-dom';

function Boekhouder () {
    return (
        <div>
            <div className='Grid-display'>
                <div className='test'>
                    <section>
                        <h3>Financieel administrateur</h3>
                        <ul>
                            <li>Administratie van 4 vennootschappen.</li>        
                            <li>Verwerken van banktransacties en het beheren van kasstromen.</li>
                            <li>Aanvragen van ontbrekende inkoopfacturen en declaraties (met btw).</li>
                            <li>Controle op de juiste verwerking van inkomende en uitgaande facturen.</li>
                            <li>Beheren van crediteuren- en debiteurenadministratie.</li>
                            <li>Wekelijkse rapportage van <Link target="_blank" to="https://docs.google.com/spreadsheets/d/1Z5-Uoo0LbgxS-jvHiEIS2ZtFZeZZq12r_wQchJh2QqY/edit?gid=1421585635#gid=1421585635">crediteuren</Link> die betaald moeten worden en achterstallige debiteuren.</li>
                            <li>Bijhouden van voorraadniveaus voor tijdige afhandeling van <Link target="_blank" to="https://docs.google.com/document/d/1611XXm8c0Set_QbJwsN3RuuQYrG9TC77GacNoj1d9Rw/edit?tab=t.0">werkorders.</Link></li>
                            <li>Aanmaken van grootboekrekeningen en activa.</li>
                            <li>Aanpassing van vaste memoriaal-boekingen voor lease-rentebedragen.</li>
                            <li>Per kwartaal controle op overeenstemming van courant-rekeningen tussen deelnemingen.</li>
                            <li>Samenstellen van <Link target="_blank" to="https://docs.google.com/spreadsheets/d/1yjdLm4TCI9795SHlN0kbDQrtDOe0QRhRN3_y46YVv7A/edit?gid=738497047#gid=738497047">BTW-rondrekening</Link> en andere fiscale verplichtingen.</li>
                            <li>Assisteren bij het opstellen van <Link target="_blank" to="https://docs.google.com/spreadsheets/d/11sRcjaanmlPvhXc6FwiHmXrt_0EB76Ho/edit?gid=1823918960#gid=1823918960">financiële rapportages</Link> en jaarrekeningen.</li>
                            <li>Ondersteunen bij het opstellen en controleren van budgetten en forecasts.</li>                            
                            <li>Bijdragen aan de optimalisatie van financiële processen en procedures.</li>
                            <li>Toepassing van <Link target="_blank" to="https://docs.google.com/spreadsheets/d/18BX6QY9gp6abP5adzK1Po4HpM0WXJX5AlDyoY30lj-M/edit?gid=1608411637#gid=1608411637">werkkostenregeling</Link>(WKR)</li>                            
                            <li>Indiening van auditfile en <Link target="_blank" to="https://docs.google.com/spreadsheets/d/1HA3IMfc3rSNyI48RDX9F6NyPqZN0ekeX/edit?gid=1773505069#gid=1773505069">bijhorende stukken</Link> voor jaarrekeningen.</li>           
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