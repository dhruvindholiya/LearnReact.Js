import React, { useState } from 'react';
import FamousePlace from './famousePlaceFun';

function CountryFun(props) {
    const [name, setCountry] = useState('India')
    const handleCountries = () => {
        if(name === 'India') {
            setCountry('Canada');
        } else {
            setCountry('India');
        }
        
    }
    return (
        <div>
            <br></br><hr></hr><br></br>
            <p>* funcation besed change the countries</p>
            <button onClick={handleCountries}>Change Country</button>
            <FamousePlace country_name={name} />
        </div>
    );
}

export default CountryFun;