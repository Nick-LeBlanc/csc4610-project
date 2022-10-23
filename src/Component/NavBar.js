import { Link } from "react-router-dom";
import '../Styles/global.css';
import './NavBar.css';

export default function NavBar(){
return(
<header class='head'>
<Link to="/"><img src = 'https://cdn2.steamgriddb.com/file/sgdb-cdn/icon/eefc9e10ebdc4a2333b42b2dbb8f27b6.png' height='50px' width='50px'></img></Link>
  <nav>
  <div class="dropdown">
  <Link class='link' to="/Characters">Characters</Link> |{" "}
  <div class="dropdown-content">   
    <Link class='dd' to="Characters/Dr. Mario">Link 1</Link>
    <Link class='dd' to="#">Link 2</Link>
    <Link class='dd' to="#">Link 3</Link>
    <Link class='dd' to="#">Link 4</Link>
    <Link class='dd' to="#">Link 5</Link>
  </div>
  </div>

  <Link class='link' to="/Stages">Stages</Link> |{" "}
  <Link class='link' to="/Players">Players</Link>

</nav>
</header>
)}
