import CountryCard from "./CountryCard"

function Country_List({countries}) {
    
  return (
    <div className='country_list'>

        {
            countries && countries.map((country,idx)=>{
                
                return <CountryCard country={country} key={idx}   />
            })

            
        }
      
    </div>
  )
}

export default Country_List
