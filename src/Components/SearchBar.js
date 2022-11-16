import {useState} from "react";
import { useNavigate } from "react-router-dom";
import '../styles/SearchBar.css'

export default function SearchBar(){
    let navigate = useNavigate();
    let [message, setMessage] =useState(<></>);

    async function handleSublmit(e){
        e.preventDefault();
        if(e.target.searchBar.value != ""){
                fetch(`http://54.236.91.239:3001/CheckExists/${e.target.searchBar.value}`)
                .then(response => response.json())
                .then(data => {
                    if(JSON.stringify(data) !== "[]"){
                        //console.log(JSON.stringify(data));
                        setMessage(<div></div>);
                        navigate("/" + e.target.searchBar.value)
                    }else{
                        setMessage(<div>Movie not in database</div>)
                    }
                })}
        
    }

    return(
        <form className="SubmitForm" onSubmit={handleSublmit}>
            <input type='text' className="searchBar" id ="searchBar" name="searchBar" placeholder="search..."></input>
            <button className="SubmitButton">Search</button> 
            {message}
        </form>
    )
}