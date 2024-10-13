import React from 'react'

function CountryCard({country}) {
    // console.log(country);
    
  return (
    <div className='country-card' >

      <img src={`${country.flags.svg}`} alt={`${country.name.common}`}  />

      <div>
        
         <h2>{country.name.common}</h2>
         <p><b>Population:</b> {country.population} </p>
         <p><b>Region:</b> {country.region}</p>
         <p><b>Capital:</b> {country.capital}</p>
         
      </div>
    </div>
  )
}

export default CountryCard
