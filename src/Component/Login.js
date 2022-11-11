import {useRef, useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthProvider'
import AddUser from './newUser'

export default function Login(){
    let[addUser, showAU] = useState(<></>);
    const {setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef(); 

    let [user, setUser] = useState();
    let [pass, setPass] = useState();
    let [err, setErr] = useState();
    let [success, setSuccess] = useState()

    async function handleSubmit(event){
      event.preventDefault();

      try{
        await fetch("http://54.236.91.239:3001/Login",{
          headers:{'Accept':'application/json',
                  'Content-Type': 'application/json'},
          method: 'POST',
          body:JSON.stringify({
            user:user,
            pass:pass
          })
        })
        .then(response => response.json())
        .then(data => {setAuth(data.user)});
      }catch(err){
        console.log("no hit");
        setErr('No server Respose');
      }

      setSuccess(true);
      setUser('');
      setPass('');
      
    }

    useEffect(() =>{
      setErr('');
    },[user, pass])
  
    return(
      <main>
       <p ref={errRef}>{err}</p>
       <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username: </label>
          <input type='text' id='username' ref={userRef} autoComplete="off" value={user} required
          onChange={(e) => {setUser(e.target.value)}}>
            
          </input>
        <label htmlFor='password'>Password: </label>
          <input type='password' id='password' autoComplete="off" value={pass} required
          onChange={(e) => {setPass(e.target.value)}}>
            
          </input>
          <button>Sign In</button>
       </form>
      
      </main>
    )}