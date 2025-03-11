import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContextProvider";
import { logOutAction } from "../../context/actionCreators";
import routes from "../../constants/routes";
import { Button } from "react-bootstrap";

const SignOut = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  const SignOutHandler = () => {
    localStorage.removeItem("accessToken");
    dispatch(logOutAction);
    navigate(routes.home);
    window.location.reload();
  };
  return (
    <Button onClick={SignOutHandler} variant="light">
      Sign Out
    </Button>
  );
};

export default SignOut;
