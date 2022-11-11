import '../Styles/App.css';
import { useContext, useState, useEffect } from 'react';
import AuthContext from '../context/AuthProvider';
import { Link, Outlet } from "react-router-dom";

export default function App() {
    let [movies, updateMovies] = useState([]); 
    const context = useContext(AuthContext);

    function getMovies(){
        fetch('http://54.236.91.239:3001/getMovies')
        .then(response => response.json())
        .then(data => {updateMovies(data)});
    }


    useEffect(() =>{
        getMovies();
    },[])

    return (
        <main class="App">
            <h2>
            WELCOME TO NICK'S FLICKS
            </h2>
            <div>
                <b>THE</b> Movie Database
            </div>
            <div class = "stuff">
                {movies.map((m, key) =>(
                    <div>
                    <Link class="movieList" to={`/${m.title}`} id = {key}>{m.title}</Link><br/>
                    </div>
                ))}
            </div>                    
        </main>
    );
}