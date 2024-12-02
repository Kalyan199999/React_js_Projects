import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import Loading from "./Loading";

import PrepareReceipe from "./PrepareReceipe";

import API from './api'

function Home() {

    const [receips , setReceips] = useState();

    useEffect(()=>{
        fetchData();
    } , [])

    const fetchData = async ()=>{
        const d = await axios.get(API);
        setReceips(d.data.recipes)
    }
    
  return (
    <>
       {
        !receips ? <Loading />:
        <div className="parent">
            {
                receips.map((receipe)=>{
                    return(
                        <div className="child" key={receipe.id}>
                            <img src={receipe.image} alt="" />
                            <h3>{receipe.name}</h3>
                            <p>{receipe.rating}⭐</p>
                            <p>Difficulty:{receipe.difficulty}</p>
                            <Link to={`/prepareitem/${receipe.id}`}><button onClick={()=>{<PrepareReceipe  />}}>Try</button></Link>
                        </div>
                    )
                })
            }
        </div>
       }
    </>
  )
}

export default Home
