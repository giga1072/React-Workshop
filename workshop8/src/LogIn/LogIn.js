import { useContext, useState } from "react";
import { PostsContext } from "../context/PostsContext";
import { setLoginStatus } from "../PostActions/PostActionsCreators";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(PostsContext);
  const handleLogin=()=>{
    if(username === 'digitalAcademy@gmail.com' && password === 'iLoveReact123'){
        dispatch(setLoginStatus(true));
} else {alert('INVALID USERNAME OR PASSWORD')}

  }
  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
