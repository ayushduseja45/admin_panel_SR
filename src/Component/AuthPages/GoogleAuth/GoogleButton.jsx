import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../../../firebase-config.js"; // Import your Firebase app
import { getToken } from "firebase/app-check";

const GoogleButton = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    const auth = getAuth(app); // Use the initialized app here
    const provider = new GoogleAuthProvider();
    


    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log("User signed in:", user);
      // Redirect to the home page after successful sign-in
      localStorage.setItem("token", user.accessToken);
      
      navigate("/home");
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Sign in with Google
    </button>
  );
};

export default GoogleButton;
