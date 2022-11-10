import { Link } from "react-router-dom";
import '../Styles/global.css';
import '../Styles/NavBar.css';
import React from "react";
import LOGIN from './Login'


export default function NavBar(){

  const [myModal, setStyle] = React.useState("myModal");
  function showModal(){
    setStyle("openModal");
  }
  function closeModal(){
    setStyle("myModal");
  }
  
  return(
    <div>
      <header class='head'>
        <nav>
        <Link class ='link' to="/">HomePage</Link> |{" "}
        <Link class='link' to="/MoviePage">MoviePage -- Should be search bar</Link> |{" "}
        <Link class='link' onClick={showModal}>Login</Link> |{" "}
        
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
