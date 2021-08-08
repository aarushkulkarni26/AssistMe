import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { auth } from "./firebase";
import firebase from "firebase";
import { useState } from "react";
function Nav({}) {
  const signInWithGoogle = () => {
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    setlogin(true);
  };
  const [login, setlogin] = useState(false);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light py-3" id="mainNav">
        <div className="container px-4 px-lg-5">
          <Link className="navbar-brand" to="/">
            AssistMe
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/help">
                  Get assisted
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/assist">
                  Assist
                </Link>
              </li>
              <li className="nav-item">
                {auth.currentUser != null ? (
                  <h6>{auth.currentUser.displayName}</h6>
                ) : (
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                    onClick={signInWithGoogle}
                  >
                    Log in
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
