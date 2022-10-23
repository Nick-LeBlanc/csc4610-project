import { Link, Outlet } from "react-router-dom";
import { getStages } from "../data/stages";
import '../Styles/stages.css';


function App() {
    let stages = getStages();
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
        {stages.map((stage) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/Stages/${stage.name}`}
            key={stage.name}
          >
            {stage.name}
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