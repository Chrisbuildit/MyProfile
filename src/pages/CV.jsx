import React from 'react';
import { gapi } from 'gapi-script';
import { useEffect, useRef } from 'react';

function CV () {

// Werkt niet (Veroorzaakt geen error)
const sheetElement = useRef(null);

useEffect(() => {
  if (sheetElement.current) {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    document.head.appendChild(script);
    script.onload = () => {
      gapi.load('client:auth2', () => {
        gapi.client.setApiKey(process.env.REACT_APP_API_KEY);
        gapi.client.load('sheets', 'v4', () => {
          const sheetId = '14WUiigHAgcYWXdTzWNJtjxkO_fYH2ssNOmYRZ5YlVdEywS77ViKliKjK';
          const tabbladen = document.querySelectorAll(`.docs-sheet-${sheetId} .docs-sheet-tab`);
          tabbladen.forEach(tab => {
            tab.className = 'hidden';
          });
        });
      });
    };
  }
}, []);
 
    return (
        <div className='iframe' >      
            <iframe className="CV" title='Google Sheet' src="https://docs.google.com/document/d/105MlyqQx_dFHd58zyIAjGCwMa4sVD-mTdCx_6juidBM/edit?tab=t.0"></iframe>
        </div>
    )
}

export default CV;

