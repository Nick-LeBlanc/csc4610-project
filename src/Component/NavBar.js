import { Link } from "react-router-dom";
import '../Styles/global.css';
import './NavBar.css';

export default function NavBar(){
return(
<header class='head'>
  <nav>
  <Link class ='link' to="/">HomePage</Link> |{" "}
  <Link class='link' to="/MoviePage">MoviePage -- Should be search bar</Link> |{" "}
  <Link class='link' to="/Login">Login</Link> |{" "}
  <input type="text" placeholder="Search.."></input>
</nav>
</header>
)}
