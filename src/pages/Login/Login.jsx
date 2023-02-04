import React, { useContext } from "react";
import GoogleButton from "react-google-button";
import { AuthContext } from "../../contexts/AuthContext";
const Login = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  );
};

export default Login;
