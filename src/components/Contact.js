import React, { Fragment, useState } from "react";
import classes from "./Contact.module.css";

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Fragment>
      <div className="row">
        <span className="section-heading text-white">Contact Me</span>
        <span className="section-subheading">Let's Stay in touch</span>
        <br />
        <div className="col-6">
          <label for="name" class="form-label text-white">
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

        <div className="col-6">
          <label for="email" class="form-label text-white">
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
          <label for="message" class="form-label text-white">
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
      <button className={`${classes['contact-button']} mt-2 px-2 rounded`}>
        <i class="fas fa-paper-plane"></i>
      </button>
    </Fragment>
  );
}
