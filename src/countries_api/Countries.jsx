import axios from 'axios'
import { useEffect, useMemo, useState } from 'react';

import { lazy,Suspense } from 'react';

// import Country_List from './Country_List';

import SearchBar from './SearchBar';

import FilterCountry from './FilterCountry';

import LazyLoadCountryList from './LazyLoadCountryList';

import SortDropDown from './SortDropDown';

const Country_List = lazy(()=>import('./Country_List'))

// API address
const API = "https://restcountries.com/v3.1";

function Countries() {

    const [countries,setCountries] = useState();
    const [filterCountries,setFilterCountries] = useState();
    const [sortOrder,setSortOrder] = useState("asc")
    
    const [search ,setSearch] = useState("");
    let isLoaded = false;

    // get the countries
    useEffect(()=>{
        getCountries()

    },[])

    // Filter the products
    useEffect(()=>{

      if(countries)
      {
          let filter_countries  = countries.data.filter((country)=>{
            return country.name.common.toLowerCase().includes(search.toLowerCase())
          })
          .sort((a,b)=>{
            return sortOrder === "asc" ? a.name.common.localeCompare(b.name.common) : b.name.common.localeCompare(a.name.common)
          })
          
          setFilterCountries(filter_countries)
      }

    } , [search,sortOrder])

    const getCountries = async ()=>{

        try {
            
            const res = await axios.get(`${API}/all`);

            setCountries(res)

            const filter = res.data.sort((a,b)=>{
              return sortOrder === "asc" ? a.name.common.localeCompare(b.name.common) : b.name.common.localeCompare(a.name.common)
            })

            setFilterCountries(filter)
            
            isLoaded = true;
        
        } catch (error) {
            console.log("Error");
            
        }
    }

    const handleChange = (e)=>{
      setSearch(e.target.value);
    }

    // sort the countries by continents
    const getCountriesByRegion = async (regionName)=>{

      try {
        if(regionName === 'all')
        {
          const res =await axios.get(`${API}/${regionName}`)
    
          setFilterCountries(res.data)

        }
        else{
          const res =await axios.get(`${API}/region/${regionName}`)

          setFilterCountries(res.data)

        }
        
      } catch (error) {
        console.log("Error");
      }
      
    }

    const handleSortOrder = (e)=>{
      setSortOrder(e.target.value)
    }


  return (
    <div className='container'>
      <SearchBar search={search}  handleChange ={handleChange} />

      <div className="sort-filter">
        <FilterCountry onSelect={getCountriesByRegion} />
        <SortDropDown sortOrder={sortOrder} handleSortOrder={handleSortOrder} />
      </div>

      <Suspense fallback={<LazyLoadCountryList />}>

          <Country_List countries={filterCountries}  />

      </Suspense>

    </div>
  )
}

export default Countries
