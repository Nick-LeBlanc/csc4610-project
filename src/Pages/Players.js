import { Link, Outlet } from "react-router-dom";
import { getPlayers } from "../data/players";
import '../Styles/players.css';


function App() {
    let players = getPlayers();
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
        {players.map((player) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/Players/${player.name}`}
            key={player.name}
          >
            {player.name}
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