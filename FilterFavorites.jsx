import React from 'react'

function FilterFavorites( { categoria }) {
  return (
    <div className='dropContainer'>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Filtrar
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#" onClick={()=>categoria("movie")}>
            Peliculas
          </a>
          <a className="dropdown-item" href="#"onClick={()=>categoria("series")}>
            Series
          </a>
          {/* <a className="dropdown-item" href="#"onClick={()=>categoria(3)}>
            Something else here
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default FilterFavorites