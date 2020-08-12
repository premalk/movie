import React, {useState, useEffect} from 'react';
import Header from './Header.jsx';
import MovieList from './MovieList.jsx';
import data from '../data.json';
const Movies = () => {
  const [DATA, setDATA] = useState([]);
  useEffect(()=>{
    setDATA(data);
  },[]);
  return (
    <>
    <Header />
    <MovieList 
      movieDetails={DATA}
    />
    </>
  )
};
export default Movies;
