import {useState} from 'react'
import '../styles/Signup.css'

function SignUp() {
    let [username, setUser] = useState();
    let [password, setPassword] = useState();
    let [message, setMessage] = useState();


    async function handleSubmit(e){
        e.preventDefault();
        try {
          await fetch("http://54.236.91.239:3001/Register",{
            headers:{'Accept':'application/json',
                    'Content-Type': 'application/json'},
            method: 'POST',
            body:JSON.stringify({
              user:username,
              pass:password
            })
          })
          .then(response => response.json())
          .then(data => {console.log(username, password);});  
        } catch (error) {
          
        } 
        setUser('');
        setPassword('');
    }
  return (
    <div className="SignUp">
      <form className="loginForm" onSubmit={handleSubmit}>
      <label className="login" htmlFor='username'>New Username: </label>
      <input type='text' id='username' value={username} required 
            autoComplete='off' onChange={(e)=>{setUser(e.target.value)}}></input>
      <br></br>
      <label className="password" htmlFor='password'>New Password: </label>
      <input type='password' id='password' value={password}  required onChange={(e)=>{setPassword(e.target.value)}}></input>
      <br></br>
      <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
