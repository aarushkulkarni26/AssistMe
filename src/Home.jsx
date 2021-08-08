import React from 'react'
import firebase from "firebase";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { auth } from "./firebase";
import logo from "./AssistMe.png";
import { useAuthState } from "react-firebase-hooks/auth";
const signInWithGoogle = () =>
  auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

function Home() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <header className="">
        <center>
          <img src={logo} alt="" />
        </center>
        <div>
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold">
                The place to get assisted and assist others
              </h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 mb-5">
                AssistMe can help <b>U</b>, and you can help others
              </p>
              <a className="btn btn-primary btn-xl" onClick={signInWithGoogle}>
                Log in
              </a>
            </div>
          </div>
        </div>
      </header>
      <br />
      <br />
      <section
        className="page-section bg-primary"
        id="about"
        style={{ borderRadius: "40px", marginBottom: "100px" }}
      >
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">We've got what you need!</h2>
              <hr className="divider divider-light" />
              <p className="text-white-75 mb-4">
                AssistME is a website where <b>U</b> can get assisted and assist
                other's!
              </p>
              <Link className="btn btn-light btn-xl" to="/help">
                Get Started!
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
