// SignOut.js
import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { useNavigate } from 'react-router-dom';

const SignOut = () => {

  const Navigate = useNavigate();
  const sinUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      Navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
  <>
    <button className="sign-out-button" onClick={sinUserOut}>
      Sign Out
    </button>
    </>
  );
};

export default SignOut;
