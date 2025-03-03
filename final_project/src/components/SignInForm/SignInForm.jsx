import React, { useState } from "react";
import { authHandler } from "../../api/auth";
import authAction from "../../constants/authAction";
import { useAuthContext } from "../../context/AuthContextProvider";
import routes from "../../constants/routes";
import { logInAction, setLoadingStatus } from "../../context/actionCreators";
import { useNavigate } from "react-router-dom";
import { Spinner, Button } from "react-bootstrap";
import "./SignInForm.css";
const SignInForm = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useAuthContext();
  const [userInfo, setUserInfo] = useState({
    userName: "",
    password: "",
    error: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    if (!userInfo.userName || !userInfo.password) {
      setUserInfo((prev) => ({
        ...prev,
        error: "Please fill in both fields!",
      }));
      return;
    }
    setUserInfo((prev) => ({
      ...prev,
      error: "",
    }));

    dispatch(setLoadingStatus(true));
    authHandler(authAction.signIn, userInfo)
      .then((data) => {
        dispatch(logInAction(data));
        navigate(routes.moviesList);
      })
      .catch((err) => {
        setUserInfo((prev) => ({
          ...prev,
          error: err.message,
        }));
      })
      .finally(() => dispatch(setLoadingStatus(false)));
  };
  return (
    <div className="form-container">
      <div className="blur-bg"></div>
      {!state.loading ? (
        <form className="sign-in-form" onSubmit={submitHandler}>
          <div className="form-group">
            <label> Username:</label>
            <input
              placeholder="User Name"
              name="userName"
              value={userInfo.userName}
              onChange={(e) =>
                setUserInfo((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>
          <div className="form-group">
            <label> Password:</label>
            <input
              placeholder="Password"
              name="password"
              value={userInfo.password}
              onChange={(e) =>
                setUserInfo((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>{" "}
          {userInfo.error && <div className="error-message">{userInfo.error}</div>}
          <button className="submit-btn" type="submit">
            Sign In
          </button>
        
        </form>
      ) : (
        <div>
          <div className="spinner-container">
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                className="spinner"
              />
              Loading...
            </Button>
          </div>
        </div>
      )}

    </div>
  );
};

export default SignInForm;
