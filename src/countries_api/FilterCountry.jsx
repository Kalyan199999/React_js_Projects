import React from 'react'

function FilterCountry({onSelect}) {
    const continents  = [
        {id:1,name:"Asia"},
        {id:2,name:"Europe"},
        {id:3,name:"North America"},
        {id:4,name:"South America"},
        {id:5,name:"Oceania"},
        {id:6,name:"Africa"},
        {id:7,name:"Antarctica"}
    ];

    const selectHandler = (e)=>{
        const region = e.target.value;
        onSelect(region)
    }

  return (
    <select onChange={(e)=>{selectHandler(e)}}>
        <option value="all" >Filter By Region</option>
        {
            continents.map((continent)=>{
                return(
                    <option value={continent.name} key={continent.id}>{continent.name}</option>
                )
            })
        }

    </select>
  )
}

export default FilterCountry
