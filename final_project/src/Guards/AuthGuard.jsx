import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContextProvider";
import routes from "../constants/routes";

const AuthGuard = ({ children }) => {
  const { state } = useAuthContext();
  const navigate = useNavigate();
  return (
    <>
      {state.isAuthenticated ? (
        children
      ) : (
        <div>
          <h2>Not Authenticated</h2>
          <p>Please sign in or sign up</p>
          <button onClick={() => navigate(routes.signIn)}>Sign In</button>
          <button onClick={() => navigate(routes.signUp)}>Sign Up</button>
        </div>
      )}
    </>
  );
};
export default AuthGuard;
