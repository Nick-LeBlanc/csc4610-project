import { useContext } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

function MoviePage() {
  const context = useContext(AuthContext);
  let params = useParams();
    return (
      <main>
          {context.auth}
          <div>
            {params.name}
          </div>
      </main>
    );
  }
  
  export default MoviePage;