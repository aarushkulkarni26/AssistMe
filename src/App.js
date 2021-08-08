import React, { useState } from "react";
import firebase from "firebase";
import Assists from "./Assists.jsx";
import Nav from "./Nav.jsx";
import { auth } from "./firebase";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Help from "./Help.jsx";
import About from "./About";
import "./App.css";
import Home from "./Home";
import Add from "./Add";
function App() {
  const signInWithGoogle = () => {
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    setlogin(true);
  };
  const [login, setlogin] = useState(false);
  return (
    <div className="app">
      <Router>
        <div className={"container"}>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/add">
              <Nav />
              <Add />
            </Route>
            <Route path="/help">
              <Nav />
              <Help />
            </Route>
            <Route path="/about">
              <Nav />
              <About />
            </Route>
            <Route path="/assist">
              <Nav />
              <Assists />
            </Route>
            <Route path="/">
              <Nav />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

      <footer className="bg-light py-5">
        <div className="container px-4 px-lg-5">
          <div className="small text-center text-muted">
            Copyright &copy; 2021 - Company Name
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
