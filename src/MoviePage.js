import logo from './logo.svg';
import { Link } from 'react-router-dom';
import {useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AuthContext from './context/AuthProvider';
import Login from './Components/Login';
import Header from './Components/Header';
import RatingForm from './Components/Rating Form';
import './styles/MoviePage.css'

function MoviePage() {
    const params = useParams();
    const {auth} = useContext(AuthContext);
    let [rating, changeRating] = useState(-1);

    let [movie, setMovie] = useState([]);

    async function getMovie(){
      const res  = await fetch(`http://54.236.91.239:3001/CheckExists/${params.name}`);
      setMovie(await res.json());
    }
    async function getUserRating(){
      if(auth.user_id !== -1){
        try {
          await fetch("http://54.236.91.239:3001/getUserRating",{
            headers:{'Accept':'application/json',
                    'Content-Type': 'application/json'},
            method: 'POST',
            body:JSON.stringify({
              user_id:auth.user_id,
              title: params.name
            })
          })
          .then(response => response.json())
          .then(data => {changeRating(data.rating)});  
        } catch (error) {
          
        } 
      }
    }
    useEffect(() => {
      getMovie();
      getUserRating();
    },[params.name, rating]);

    if(auth.user_id === -1){
        return <Login></Login>
      }else if (movie[0] !== undefined){
        return (
          <div className='MovieContainer'>
                <Header/>
                <h1 className='MoviesName'>{params.name}</h1>
                <div className='MovieOverview'>{movie[0].overview}</div>
                <br></br>
                <RatingForm movie_id={movie[0].movie_id} rating={rating}></RatingForm>
          </div>
    );
        }
}

export default MoviePage;
