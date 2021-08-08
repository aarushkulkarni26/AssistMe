import React from 'react'
import { useState } from "react";
import firebase from "firebase";
import { auth, firestore } from "./firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
function Help() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [place, setPlace] = useState("");
  const assistRef = firestore.collection(
    `users/${auth.currentUser.uid}/assists`
  );
  const signOut = () => {
    auth.signOut();
  };
  const onSubmitAssist = (e) => {
    e.preventDefault();
    assistRef.add({
      name: name,
      email: email,
      phone: phone,
      message: message,
      place: place,
      img: img,
      title: title,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div>
      <section className="page-section" id="contact">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 col-xl-6 text-center">
              <h2 className="mt-0">Need some help?</h2>
              <hr className="divider" />
              <p className="text-muted mb-5">
                Show that you need assistance by adding a assistquery!
              </p>
            </div>
          </div>
          <form
            className="row gx-4 gx-lg-5 justify-content-center mb-5"
            onSubmit={onSubmitAssist}
          >
            <div className="col-lg-6">
              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="title"
                    onChange={(event) => {
                      setTitle(event.target.value);
                    }}
                    type="title"
                    placeholder="Enter your title..."
                    data-sb-validations="required"
                  />
                  <label for="name">Title</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A title is required.
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="name"
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                    type="text"
                    placeholder="Enter your name..."
                    data-sb-validations="required"
                  />
                  <label for="name">Full name</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    type="email"
                    placeholder="name@example.com"
                    data-sb-validations="required,email"
                  />
                  <label for="email">Email address</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:email"
                  >
                    Email is not valid.
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="phone"
                    onChange={(event) => {
                      setPhone(event.target.value);
                    }}
                    type="tel"
                    placeholder="(123) 456-7890"
                    data-sb-validations="required"
                  />
                  <label for="phone">Phone number</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="phone:required"
                  >
                    A phone number is required.
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    onChange={(event) => {
                      setPlace(event.target.value);
                    }}
                    placeholder="Place"
                    data-sb-validations="required,email"
                  />
                  <label for="place">Place</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An place is required.
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    onChange={(event) => {
                      setMessage(event.target.value);
                    }}
                    type="text"
                    placeholder="Enter your message here..."
                    style={{ height: "10rem" }}
                    data-sb-validations="required"
                  ></textarea>
                  <label for="message">Message</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="message:required"
                  >
                    A message is required.
                  </div>
                </div>

                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">
                      https://startbootstrap.com/solution/contact-forms
                    </a>
                  </div>
                </div>

                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">
                    Error sending message!
                  </div>
                </div>

                <div className="d-grid">
                  <button
                    className="btn btn-primary btn-xl"
                    id="submitButton"
                    type="submit"
                    onClick={onSubmitAssist}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Help;
