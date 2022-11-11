import { Link } from "react-router-dom";
import '../Styles/global.css';
import '../Styles/NavBar.css';
import React, {useEffect} from "react";
import LOGIN from './Login'
import { useContext } from 'react';
import AuthContext from '../context/AuthProvider';


export default function NavBar(){

  const context = useContext(AuthContext);
  const [myModal, setStyle] = React.useState("myModal");
  let [login, setLogin] = React.useState('Login');
  function showModal(){
    setStyle("openModal");
  }
  function closeModal(){
    setStyle("myModal");
  }
  
  useEffect(() =>{
    console.log(context.auth);
    if(context.auth != ""){
      setLogin("Log Out");
    }
  },[context.auth])

  return(
    <div>
      <header class='head'>
        <nav>
        <Link class ='link' to="/">HomePage</Link> |{" "}
        <Link class='link' onClick={showModal}>{login}</Link> |{" "}
        
        <input type="text" placeholder="Search.."></input>
      </nav>
      </header>
      <div class={myModal}>
        <div class='modal-content'>
          <LOGIN/>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  )}
