import React from 'react';

export const SmurfCard = props => {

    return (
        <div className='card'>
            <h1>{props.smurf.name} </h1>
            <span>Smmmmmmuuuuuuuurrrrrrrrrrrfffffffff</span>
            <li>{props.smurf.age} years</li>
            <li>{props.smurf.height}  </li>
        </div>
    )
}