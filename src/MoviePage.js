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
    let [cast, setCast] = useState([]);

    async function getMovie(){
      const res  = await fetch(`http://54.236.91.239:3001/getInfo/${params.name}`);
      setMovie(await res.json());

      const res2  = await fetch(`http://54.236.91.239:3001/getCast/${params.name}`);
      setCast(await res2.json());
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
                <div className="MovieInfo" >
                <div className='MovieBudget'> Budget: ${movie[0].budget}</div>
                <br></br>
                {movie[0].homepage !== ""? <div className='MovieHomePage'>Homepage: <a href={movie[0].homepage}>{movie[0].homepage}</a></div>:<div></div> }
                <div className='MovieRevenue'> Revenue: ${movie[0].revenue}</div>
                <br></br>
                <div className='MovieRelease'> Release Date: {movie[0]?.release_date.split('T')[0]}</div>
                <br></br>
                <div className='MovieAvg'>Critic Average: {movie[0].vote_average}/10</div>
                <br></br>
                <RatingForm movie_id={movie[0].movie_id} rating={rating}></RatingForm>
                <br></br>
                </div>
                <div className='MovieOverview'>{movie[0].overview}</div>
                <br></br>
                <h3>Cast</h3>
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Character</th>
                            <th>Actor</th>
                        </tr>
                    </thead>
                    <tbody>
                    {cast.map((mem, index)=>(
                      <tr key={index}>
                        <td>{mem.character_name}</td>
                        <td>{mem.person_name}</td>
                      </tr>
                    ))}
                    </tbody>
                </table>
          </div>
    );
        }
}

export default MoviePage;

{/* <tbody>
      
      <tr>
          <td>Dom</td>
          <td>6000</td>
      </tr>
  </tbody> */}
