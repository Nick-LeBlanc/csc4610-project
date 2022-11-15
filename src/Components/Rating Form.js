import { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthProvider";

export default function RatingForm({rating, movie_id}){

    let [input, setInput] = useState();
    const {auth} = useContext(AuthContext);


    async function handleSubmit(e){
        e.preventDefault()
        try {
            await fetch("http://54.236.91.239:3001/RateMovie",{
              headers:{'Accept':'application/json',
                      'Content-Type': 'application/json'},
              method: 'POST',
              body:JSON.stringify({
                user_id:auth.user_id,
                movie_id: movie_id,
                rating:input
              })
            })
            .then(response => response.json())
            .then(data => {});  
          } catch (error) {
            console.log('it didnt work');
          } 
    }

    async function getAvg(){

    }

    if(rating == -1){
        return (
        <div>
            <form onSubmit={handleSubmit}>
                <span>How would you rate this movie: </span>
                <input type='range' min="1" max="100" className="slider" onChange={(e) =>{setInput(e.target.value / 10)}}></input>
                <button>Rate</button>
            </form>
            <br></br><div>{input}</div>

        </div>)
    }
    return(
        <div>
        {rating}
        <br></br>
        <span>
            Rate Again: 
        </span>
        </div>
    )
}