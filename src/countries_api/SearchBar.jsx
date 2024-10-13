
function SearchBar({search,handleChange}) {

    
  return (
    <div className='search-bar'>
        <input type="text" placeholder='Search here....' value={search} onChange={(e)=>{
            handleChange(e);
        }} />
     
    </div>
  )
}

export default SearchBar
