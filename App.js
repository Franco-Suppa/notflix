import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';
import RemoveFavorites from './components/RemoveFavorites';
import FilterFavorites from './components/FilterFavorites';

function App() {
  const [movies , setMovies] = useState([])
  const [searchValue , setSearchValue] = useState("")
  const [searchText , setSearchText] = useState('')
  const [favorites , setFavorites] = useState([])
  const getMovieRequest = async () => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=5614c214`
    const response = await fetch(url)
    const responseJson = await response.json()
    if(responseJson.Search){
    setMovies(responseJson.Search)
    }


  }

  useEffect(() => {
      getMovieRequest()
  }, [searchValue])

  useEffect(() => {
      const movieFavorites = JSON.parse(localStorage.getItem('notflix-favoritos'))
      if(movieFavorites){
      setFavorites(movieFavorites)
      }
  }, [])

  const saveToLocalStorage = (items) => {
    localStorage.setItem('notflix-favoritos' , JSON.stringify(items))
  }

  const handleSearchValue = () => {
    setSearchValue(searchText)
  }

  const addFavorite = (movie) => {
    if(favorites.some((favorite) => favorite.Title == movie.Title)){
      
  } else {
    const newFavoriteList = [...favorites , movie ]
    setFavorites(newFavoriteList)
    saveToLocalStorage(newFavoriteList)
    console.log(favorites) 
  }
  }

  const removeFavoriteMovie = (movie) => {
    const newDelFavoriteList = favorites.filter((favorite) => favorite != movie)
    setFavorites(newDelFavoriteList)
    saveToLocalStorage(newDelFavoriteList)
    console.log(favorites)
  }

  const [categoria , setCategoria] = useState("")
  


  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center'>
        <MovieListHeading title={"NotFlix"}/>
        <SearchBox handleSearchValue={handleSearchValue} setSearchText={setSearchText} searchText={searchText}/>
      </div>
      <div className='row searchResults'>
      <MovieList movies={movies} handleFavoritesClick={addFavorite} favoriteComponent={<AddFavorites/>} />
      </div>
      <div className='row d-flex align-items-center favBar'>
      <MovieListHeading title={"Favoritos"}/>
      <FilterFavorites categoria={setCategoria}/>

      </div>
      <div className='row favorites'>
      <MovieList movies={categoria ? favorites.filter((favorite)=> favorite.Type == categoria) : favorites} handleFavoritesClick={removeFavoriteMovie} favoriteComponent={<RemoveFavorites/>} />
      </div>
    </div>
  );
}

export default App;

