import React, { useEffect, useState } from 'react';
import fetchCountries from '../../api/fetchCountries';
import Country from '../Country/Country';
import "./Countries.css"

const Countries = () => {
    const [countries, setCountries] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getCountries = async() =>{
            try{
                const countries = await fetchCountries();
                setCountries(countries);
            } catch(error){
                setError(error);
            }
            finally{
                setLoading(false);
            }
        }
        getCountries();
    },[])

    if(error){
        return <div>  Error: {error.message}   </div>
    }
    if (loading) {
        return <div>Loading...</div>;
      }


    return (
      <>
      <h1 style={{textAlign: 'center'}}>Total Countries: {countries.length}</h1>
      <div className='countries'>
        {countries?.map(country => <Country country={country} key={country.cca3} />)}
        </div>
      </>
    );
};
export default Countries;


