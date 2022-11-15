import {useState, useContext } from 'react'
import AuthContext from '../context/AuthProvider';
import SignUpForm from './Signup';
import '../styles/Login.css'

function Login() {
    const {auth, setAuth} = useContext(AuthContext);
    let [username, setUser] = useState();
    let [password, setPassword] = useState();
    let [SignUp, showSignUp] = useState(<></>);
    let [message, setMessage] = useState(<></>);

  function displaySignUp(){
    showSignUp(<SignUpForm/>);
  }

  async function handleSubmit(e){
    e.preventDefault();
    try {
      await fetch("http://54.236.91.239:3001/Login",{
        headers:{'Accept':'application/json',
                'Content-Type': 'application/json'},
        method: 'POST',
        body:JSON.stringify({
          user:username,
          pass:password
        })
      })
      .then(response => response.json())
      .then(data => {setAuth(data)});  
    } catch (error) {
      setMessage(<div>User not Found</div>)
    } 
    //setAuth(username);
    setUser('');
    setPassword('');
  }

  return (
    <div className="Login">
      <form className="loginForm" onSubmit={handleSubmit}>
      <label className="login" htmlFor='username'>Login: </label>
      <input type='text' id='username' value={username} required 
            autoComplete='off' onChange={(e)=>{setUser(e.target.value)}}></input>
      <br></br>
      <label className="password" htmlFor='password'>Password: </label>
      <input type='password' id='password' value={password}  required onChange={(e)=>{setPassword(e.target.value)}}></input>
      <br></br>
      <button>Log In</button>
      </form>
      <div className='MakeAccount'>
        <div>{message}</div>
        Need an account?
        <div className='SignupLink' onClick={displaySignUp}>Click here to sign up here</div>
        {SignUp}
      </div>
    </div>
  );
}

export default Login;
