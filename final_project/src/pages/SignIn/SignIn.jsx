import React from "react";
import { useLocation } from "react-router-dom";

import SignInForm from "../../components/SignInForm/SignInForm";

const SignIn = () => {
  const location = useLocation();

  return (
    <div>
      {location.state?.success && <p>Sign up successful</p>}
      <SignInForm />
    </div>
  );
};
export default SignIn;
