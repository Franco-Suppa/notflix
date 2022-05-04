import React from 'react'

function MovieList({ movies , favoriteComponent, handleFavoritesClick }) {
  return (
    <>
        {movies.map((movie , index) => 
        <div key={index} className='image-container d-flex justify-content-start m-3'>
            <img src={movie.Poster} alt={movie.Title}  />
            <div onClick={()=> handleFavoritesClick(movie)} className='overlay d-flex align-items-center justify-content-around'>
                {favoriteComponent}
            </div>

        </div> )}
    </>
  )
}

export default MovieList