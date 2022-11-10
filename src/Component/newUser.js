export default function newUser(){

  function onSubmit(){

  }

  return(
    <main>
      <form onSubmit={onSubmit}>
      <label for="username">New Username:</label>
      <input type="text" id="username" name="username"/>
      <br></br>
      <label for="pass">New Password:</label>
      <input type="text" id="pass" name="password"/>
      <br></br>
      <input type="submit" value="Add User"/>
      </form>      
    </main>
  )}