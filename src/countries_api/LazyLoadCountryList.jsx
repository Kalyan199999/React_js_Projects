import React from 'react'

function LazyLoadCountryList() {
    const arr = new Array(250);
  return (
    arr.map((ele)=>{
        return <div className='lazy-load'>
            Loading...
       </div>
    })
  )
}

export default LazyLoadCountryList
