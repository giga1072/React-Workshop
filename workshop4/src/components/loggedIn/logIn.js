import { useState } from "react";

function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  function handleChange(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(credentials);
  }

  return (
    <div className='login'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
       
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;