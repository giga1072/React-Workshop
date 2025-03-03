import React from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import { useAuthContext } from "../../context/AuthContextProvider";
import SignOut from "../SignOut/SIgnOut";

const NavBar = () => {
  const { state } = useAuthContext();
  const navigate = useNavigate();
  const appRoutes = Object.entries(routes);
  return (
    <nav className="nav-bar">
      <div className="left">
        {appRoutes.map((link) => {
          const [key, value] = link;
          if (state.isAuthenticated) {
            if (key === "home" || key === "moviesList") {
              return (
                <button key={key} onClick={() => navigate(value)}>
                  {key}
                </button>
              );
            }
          } else {
            if (key === "signIn" || key === "signUp" || key === "home") {
              return (
                <button key={key} onClick={() => navigate(value)}>
                  {key}
                </button>
              );
            }
          }

          return null;
        })}
      </div>
      {state.isAuthenticated && (
        <div className="user-info">
          <span>{state.user.userName}</span>
          <SignOut />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
