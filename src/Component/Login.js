import React from 'react'
import AddUser from './newUser'

export default function Login(){
    let[addUser, showAU] = React.useState(<></>); 

    function onSubmit(){
  
    }
    function showAddUser(){
        showAU(AddUser);
    }
  
    return(
      <main>
        <form onSubmit={onSubmit}>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"/>
        <br></br>
        <label for="pass">Password:</label>
        <input type="text" id="pass" name="password"/>
        <br></br>
        <input type="submit" value="Login"/>
        </form>
        <div><button onClick={showAddUser}>Create Account</button>
        {addUser}
        </div>
      
      </main>
    )}