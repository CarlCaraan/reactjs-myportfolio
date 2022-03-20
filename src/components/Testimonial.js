import React, { Fragment } from "react";
import classes from "./Testimonial.module.css";

export default function Testimonials() {
  const testimonials = [
    {
      id: "1",
      name: "John Doe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: "2",
      name: "John Doe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: "3",
      name: "John Doe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  return (
    <Fragment>
      <div className="container">
        <div className="row my-5">
          {testimonials.map((value) => {
            return (
              <div className="col-lg-4 col-sm-12 col-md-6 mb-2" key={value.id}>
                <div className="testimonial-card d-flex flex-column px-3 py-4 shadow border rounded">
                  <span className={`${classes["description"]}`}>
                    {value.description}
                  </span>
                  <br />
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className={`${classes["name"]}`}>{value.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}
