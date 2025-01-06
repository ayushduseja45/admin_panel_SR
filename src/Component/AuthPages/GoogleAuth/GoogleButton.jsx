// src/components/GoogleButton.jsx
import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import app from '../../../firebase-config.js'; // Import your Firebase app

const GoogleButton = () => {
  const handleGoogleSignIn = async () => {
    const auth = getAuth(app); // Use the initialized app here
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log('User signed in:', user);
      // Handle user data here (e.g., save it to your backend or state management)
    } catch (error) {
      console.error('Error during Google sign-in:', error);
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
