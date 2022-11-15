import './styles/HomePage.css'
import {useState, useContext, useEffect } from 'react';
import Header from './Components/Header';
import AuthContext from './context/AuthProvider';
import { Link } from 'react-router-dom';


function HomePage() {
  const {auth} = useContext(AuthContext);
  let [movies, setMovies] = useState([]);

  async function getMovies(){
    const res  = await fetch('http://54.236.91.239:3001/getMovies');
    setMovies( await res.json());
  }

  useEffect(() => {
    getMovies();
  },[]);

  return (
    <main className='MoviePage'>
      {/* {console.log(movies)} */}
        <Header/>
        <br></br>
        <div>{auth.user_id}</div>
        <div className='container'>
        {movies.map((movie, index) =>(
          <Link to={movie.title} className='MovieList' key={index}>
              <b className='MovieName' to={movie.title} >{movie.title}</b>
              <div className='tagline'>{movie.tagline}</div>
              <div className='popularity'>{movie.vote_average}/10</div>
          </Link>
        ))}
        </div>
    </main>
  );
}

export default HomePage;
