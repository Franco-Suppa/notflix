import React from 'react'

function SearchBox({ handleSearchValue , setSearchText , SearchText }) {
  return (
    <div  className='col justify-content-start col-sm-4 d-flex'>
        <input className='form-control' placeholder='Buscar peliculas'
        value={SearchText}
        onChange={(event) => setSearchText(event.target.value)} />
        <button onClick={handleSearchValue} type="button" class="btn btn-light searchBtn">Buscar</button>
    </div>
  )
}

export default SearchBox