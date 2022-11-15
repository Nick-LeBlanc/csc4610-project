import '../styles/Header.css';
import SearchBar from './SearchBar'
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import AuthContext from '../context/AuthProvider';
import HomePage from '../HomePage';

export default function Header(){
  let [modal, showModal] = useState("modalHidden")
  const {auth, setAuth} =useContext(AuthContext);
  const navigate = useNavigate();

    function display(){
      if(modal === "modalHidden"){
        showModal("modalShow");
      }else{
        showModal("modalHidden");
      }
    }

    function LogOut(){
      setAuth({user:"", user_id:-1});
    }
    return(
      <>
        <h1 className='header'>
          <div className='inner'>
            <Link className='Link' to='/'> Nick's Flicks </Link>
            <SearchBar/>
          </div>
          
          <img  onClick={display} src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" className='profile'/>
        </h1>
        <div className={modal}>
          <div>
            <br></br>
            <button onClick={LogOut}>Log Out</button>
          </div>
        </div>
        </>
    );
}

//https://cdn-icons-png.flaticon.com/512/1946/1946429.png