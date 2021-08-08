import React from 'react'
import { useState } from "react";
import { firestore, auth } from "./firebase";
import Clipboard from "react-clipboard.js";

function Assist({ key, message, name, place, phone, email, title }) {
  const todosRef = firestore.collection(
    `users/${auth.currentUser.uid}/assists`
  );

  return (
    <div key={key} classNameName="todo m-3 mt-6" style={{ width: "400px" }}>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{message}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Name: {name}</li>
          <li className="list-group-item">Where: {place}</li>
          <li className="list-group-item">Phone: {phone}</li>
          <li className="list-group-item">Email: {email}</li>
        </ul>
        <div className="card-body">
          <Clipboard
            data-clipboard-text={email}
            button-title="Copy email"
            className="card-link btn btn-primary"
          >
            Copy email
          </Clipboard>
        </div>
      </div>
    </div>
  );
}
export default Assist;
