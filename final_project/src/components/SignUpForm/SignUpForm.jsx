import React, { useState } from "react";
import { authHandler } from "../../api/auth";
import authAction from "../../constants/authAction";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import { Spinner, Button } from "react-bootstrap";
import "./SignUpForm.css";
import { useAuthContext } from "../../context/AuthContextProvider";
import { setLoadingStatus } from "../../context/actionCreators";
const SignUpForm = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useAuthContext();
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    error: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.userName || !user.password || !user.email) {
      setUser((prev) => ({
        ...prev,
        error: "Please fill form!",
      }));
      return;
    }
    setUser((prev) => ({
      ...prev,
      error: "",
    }));
    dispatch(setLoadingStatus(true));
    authHandler(authAction.signUp, user)
      .then(() => navigate(routes.signIn, { state: { success: true } }))
      .catch((error) => {
        setUser((prev) => ({
          ...prev,
          error: "Sign up failed. Please try again",
        }));
      })
      .finally(() => dispatch(setLoadingStatus(false)));
  };
  return (
    <div className="form-container">
      {!state.loading ? (
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>User Name</label>
            <input
              placeholder="User Name"
              name="userName"
              value={user.userName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          {user.error && <div className="error-message">Please Fill Form!</div>}
          <button className="submit-btn" type="submit">
            Sign Up
          </button>
        </form>
      ) : (
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      )}
    </div>
  );
};

export default SignUpForm;
