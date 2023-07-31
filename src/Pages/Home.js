import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const signIn = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      console.log(response);
      props.handleUserData(user?.email);
    } catch (err) {
      console.log(err);
    }
    navigate("/user");
  };

  return (
    <>
      <h1>Welcome Home</h1>
      <div className="card">
        <div className="card-body">
          <button className="btn btn-block btn-social btn-google" onClick={signIn}>
            Sign In
          </button>
          <Link className="btn btn-primary" to="/register">
            If new, register and start
          </Link>
        </div>
      </div>
    </>
  );
}

export {  Home };
