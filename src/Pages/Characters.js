import { Link, Outlet } from "react-router-dom";
import { getChars } from "../data/characters";
import '../Styles/chars.css';


function App() {
    let chars = getChars();
    return (
      <main>
        <header>

        </header>
        <nav>
        <div style={{ display: "flex" }}>
      <nav
        style={{
          
          padding: "1rem",
        }}
      >
        {chars.map((char) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/Characters/${char.name}`}
            key={char.name}
          >
            {char.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
        </nav>
      </main>
    );
  }
  
  export default App;