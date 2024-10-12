import React from 'react'

function Weather_Component_Data({name,temp,description}) {
  return (
    <div className="weather-info">
            <h2>{`City name:`} <label >{`${name}`}</label> </h2>
            <h2>{`Temperature:`} <label >{`${temp} C`}</label> </h2>
            <h2>{`About Today:`} <label >{`${description}`}</label> </h2>
        </div>
  )
}

export default Weather_Component_Data
