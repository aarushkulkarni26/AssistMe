import React from 'react'
import firebase from 'firebase'
import { auth, firestore } from "./firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Redirect } from 'react-router-dom';
import "./Assists.css";
import Assist from "./Assist";
function Assists() {
  const signInWithGoogle = () => {
      auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    };

  const assistRef = firestore.collection(
    `users/${auth.currentUser.uid}/assists`
  );
  const [assists] = useCollectionData(assistRef);
  return (
    <div
      className={"cards"}
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        marginTop: '40px',
        display: "grid",
        gridGap: "1rem",
      }}
    >
      {assists &&
        assists.map(
          ({
            message = "help",
            name = "john doe",
            place = "idk really",
            phone = "im 2",
            email = "gogo gaga",
            title = "hello",
          }) => (
              <Assist
                message={message}
                key={auth.currentUser.uid}
                name={name}
                place={place}
                title={title}
                phone={phone}
                email={email}
                style={{
                  backgroundColor: "dodgerblue",
                  color: "white",
                  padding: "1rem",
                  height: "4rem",
                }}
              />
            )
        )}
        
    </div>
  );
}

export default Assists;
