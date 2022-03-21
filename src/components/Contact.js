import React, { Fragment, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import classes from "./Contact.module.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();
  const [error, setError] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;
    if (
      enteredName.trim().length === 0 ||
      enteredEmail.trim().length === 0 ||
      enteredMessage.trim().length === 0
    ) {
      setError({
        title: "All Field is required!",
      });
      return;
    } else {
      setError({
        title: "Email sent successfully!",
      });
    }
    const templateparams = {
      from_name: name + " " + email,
      to_name: "bannedefused@gmail.com",
      feedback: message,
    };
    emailjs
      .send(
        "service_t5r5779",
        "template_tkrlilk",
        templateparams,
        "DGapIxL35vmoFAbWq"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    //  console.log(form.current);
  };

  const form = useRef();

  return (
    <Fragment>
      <div className="contact-wrapper">
        <form ref={form} onSubmit={sendEmail}>
          <div className="row">
            <span className="section-heading">Contact Me</span>
            <span className="section-subheading">Let's Stay in touch</span>
            <br />
            <br />
            <div className="col-md-6 mb-3">
              <label htmlFor="name" className="form-label fw-bold">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="form-control"
                id="name"
                type="text"
                placeholder="Enter your name"
                name="name"
                ref={nameInputRef}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="email" className="form-label fw-bold">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="form-control"
                id="email"
                type="text"
                placeholder="Enter your email"
                name="email"
                ref={emailInputRef}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-12">
              <label htmlFor="message" className="form-label fw-bold">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="form-control"
                id=""
                cols="30"
                rows="3"
                placeholder="Enter your message"
                message="message"
                ref={messageInputRef}
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            className={`${classes["contact-button"]} mt-2 px-2 rounded`}
            value="Submit"
          />
          <br />
          <br />
          {error && (
            <small title="error.title">
              {error.title}
            </small>
          )}
        </form>
      </div>
    </Fragment>
  );
}
