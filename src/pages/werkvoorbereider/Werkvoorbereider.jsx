import React from 'react';
import image1 from '../../assets/werkvoorbereider/Vloerplaten-NGA.jpg';
import image2 from '../../assets/werkvoorbereider/Balken-NGA.jpg';
import image3 from '../../assets/werkvoorbereider/Verhoging Heipalen-NGA.jpg';
import image4 from '../../assets/werkvoorbereider/Bouwput-NGA.jpg';

function Werkvoorbereider () {
    return (
<div className='Werkvoorbereider'>
    <body>
    <h3>Assistent werkvoorbereider</h3>
        <ul>
            <li>Begeleiden van bouwprojecten</li>
            <li>Controleren, toetsen en aanpassen van werktekeningen</li>
            <li>Bestellen en inkoop van materialen</li>
            <li>Bijhouden van meer- en minderwerk</li>
            <li>Bewaken van begroting</li>
            <li>Planning opstellen en bijhouden</li>
            <li>Instructies geven aan onderaannemers</li>
            <li>Samenstellen van offertes</li>
            <li>Kosten calculaties</li>
        </ul>
    </body>
    <div className='iframe-div'>
        <img src={image1} alt=""/>
        <img src={image2} alt=""/>
        <img src={image3} alt=""/>
        <img src={image4} alt=""/>
    </div>
</div>
    )
}

export default Werkvoorbereider;