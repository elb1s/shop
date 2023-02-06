import React, { useContext, useEffect } from "react";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "./Login.css";
const Login = () => {
  const { signInWithGoogle, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {}
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);
  return (
    <div className="googleBtn">
      <div>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default Login;
