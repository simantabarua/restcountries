import React from 'react';
import "./Country.css"
const Country = (props) => {
    const { name, population, area, flags } = props.country
    return (
        <>
            <div className='country'>
                <img src={flags.png} alt="" />
                <h2>{name?.common}</h2>
                <p>Population: {population}</p>
                <p>Area: {area}</p>

            </div>
        </>
    )
}

export default Country;