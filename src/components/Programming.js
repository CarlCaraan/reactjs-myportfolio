import React, { Fragment } from "react";
import classes from "./Programming.module.css";

export default function Programming() {
  const value = [
    {
      text: "HTML",
      percentage: 90,
    },
    {
      text: "CSS",
      percentage: 90,
    },
    {
      text: "Javascript",
      percentage: 70,
    },
    {
      text: "PHP",
      percentage: 90,
    },
    {
      text: "Python",
      percentage: 80,
    },
  ];
  const imgValue = [
    {
      id: 1,
      src: "../../assets/images/svg/reactjs.svg",
    },
    {
      id: 2,
      src: "../../assets/images/svg/nodejs.svg",
    },
    {
      id: 3,
      src: "../../assets/images/svg/bootstrap.svg",
    },
    {
      id: 4,
      src: "../../assets/images/svg/laravel.svg",
    },
    {
      id: 5,
      src: "../../assets/images/svg/flask.svg",
    },
    {
      id: 6,
      src: "../../assets/images/svg/mysql.svg",
    },
    {
      id: 7,
      src: "../../assets/images/svg/firebase.svg",
    },
    {
      id: 8,
      src: "../../assets/images/svg/git.svg",
    },
    {
      id: 9,
      src: "../../assets/images/svg/jquery.svg",
    },
    {
      id: 10,
      src: "../../assets/images/svg/figma.svg",
    },
  ];
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <h4 className={`${classes["resume-title"]}`}>Tech Stack</h4>
          <p>Most used technologies.</p>
          {imgValue.map((value, index) => {
            return (
              <div className={`${classes['technology-stack-wrapper']} col-xl-2 col-sm m-2`} key={value.id}>
                <img
                  className={`${classes['technology-stack-img']} shadow-sm rounded bg-light`}
                  src={value.src}
                  alt={value.id}
                />
              </div>
            );
          })}
        </div>
        <br />
        <hr />
        <div className="row">
          <h4 className={`${classes["resume-title"]}`}>Technical Skills</h4>
          <p>A presentation of my use in each skill.</p>
          {value.map((value, index) => {
            return (
              <Fragment key={value.text}>
                <div className="col-lg-6 col-md-6 col-sm-12 my-2">
                  <span className={classes["language"]}> {value.text}</span>
                  <div className={classes["progress-some"]}>
                    <div
                      className={classes["progress-new"]}
                      style={{ width: `${value.percentage}%` }}
                    >
                      {" "}
                      <small className="text-white mx-1">
                        {value.percentage}%
                      </small>
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}
