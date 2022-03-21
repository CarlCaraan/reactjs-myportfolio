import React, { Fragment, useState } from "react";
import classes from "./Contact.module.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Fragment>
      <div className="pb-5 pt-3">
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
            ></textarea>
          </div>
        </div>
        <button className={`${classes["contact-button"]} mt-2 px-2 rounded`}>
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </Fragment>
  );
}
