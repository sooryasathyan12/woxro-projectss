import React,{useState} from 'react'
import './Login.css'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsername = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePassword = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Perform login logic here (e.g. sending a request to a server)
      console.log('Username:', username);
      console.log('Password:', password);
    };
    return (
    
           <div className='login'> <form onSubmit={handleSubmit}>
           <h2>Login </h2>
         <label>
           <input
             type="text"
             value={username}
             onChange={handleUsername}
             placeholder="Username"
           />
         </label>
         <br />
         <br />
         <label>
           <input
             type="password"
             value={password}
             onChange={handlePassword}
             placeholder="Password"
           />
         </label>
         <br />
         <br />
          <button className="button" type="submit">Login</button>
          <br></br><br></br>
          <div>
      <div>
                   <div className='google'>
            <img src='https://i.postimg.cc/kM2WMKz5/downlogoog.png'></img>
           </div>
           <p>Continue with Google</p>
       </div>
       <div>
           <div className='facebook'>
              <img src='https://i.postimg.cc/tCXytNbq/face.png'></img>
           </div>
           <p>Continue with Facebook</p>
    </div>

</div>
       </form></div>
            
          )


  
}

export default Login