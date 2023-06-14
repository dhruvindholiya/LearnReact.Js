import React from 'react';

function FamousePlace(props) {
    return (
        <div>
            <h1>{props.country_name}</h1>
            <h3>The famouse place of {props.country_name} : <em>{props.country_name === 'India' ? 'White Desert' : 'Niagara Falls'}</em></h3>
        </div>
    );
}

export default FamousePlace;