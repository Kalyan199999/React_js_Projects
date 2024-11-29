import { BrowserRouter,Routes ,Route } from "react-router-dom";
import './loadReceipe.css'

import Home from './Home'
import PrepareReceipe from "./PrepareReceipe";
import { useState } from "react";

function LoadReceips() {

    const [item , setItem] = useState();

    const fetchItem = (item)=>{
        // console.log(item);
        setItem(item)
    }

  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home fetchItem ={fetchItem}  />} />
            <Route path='/prepareitem' element={<PrepareReceipe  receipe = {item} />} />
          </Routes>
       </BrowserRouter>
    </>
  )
}

export default LoadReceips
