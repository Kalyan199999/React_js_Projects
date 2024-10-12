import { useEffect, useState } from "react"
import axios from 'axios'

import { lazy,Suspense } from "react";
import Lazy from "./Lazy";

const Weather_Component_Data = lazy(()=>import('./Weather_Component_Data'))


function Weather_component() {

    const [search , setSearch] = useState({latitude :16.50745  ,longitude :80.6466});
    const [apiData,setApiData] = useState({});

    const handleInput = (e)=>{
        setSearch({...search , [e.target.name]:e.target.value});
        console.log(search);
        
    }

    // useEffect(()=>{
    //     getData()
    // } , [search])

    const getData = async ()=>{
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${search.latitude}&lon=${search.longitude}&appid=${"ae8ac2fa1b87fdb6b434cd6299aff43f"}`)
            console.log(res);
            setApiData(res)
            
        } catch (error) {
            console.log(error);
            setApiData({})
            
        }
    }

  return (
    <div className='weather-parent'>

        <h1>Weather Report</h1>

        <marquee behavior="" direction="">This is a weather report of city: {search.latitude} and {search.longitude}</marquee>

       <div>
        <input type="text" placeholder="Enter The Latitude Indian City" name="latitude" value={search.latitude} onChange={(e)=>{handleInput(e)}} />
       </div>

       <div>
        <input type="text" placeholder="Enter The longitude  Indian City" name="longitude" value={search.longitude} onChange={(e)=>{handleInput(e)}} />
       </div>

       <button onClick={(e)=>getData()}>submit</button>

       {
        apiData.data && <Suspense fallback={<Lazy />}>
            <Weather_Component_Data name={apiData.data.name} temp={apiData.data.main.temp} description={apiData.data.weather[0].description}  />  
        </Suspense> 
       }

    </div>
  )
}

export default Weather_component


{/* <div className="weather-info">
            <h2>{`City name:`} <label >{`${apiData.data.name}`}</label> </h2>
            <h2>{`Temperature:`} <label >{`${apiData.data.main.temp} C`}</label> </h2>
            <h2>{`About Today:`} <label >{`${apiData.data.weather[0].description}`}</label> </h2>
        </div> */}