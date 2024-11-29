import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import Loading from "./Loading";


const API = "https://dummyjson.com/recipes/";

function Home({fetchItem}) {

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
                            <Link to="/prepareitem"><button onClick={()=>{fetchItem(receipe)}}>Try</button></Link>
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
