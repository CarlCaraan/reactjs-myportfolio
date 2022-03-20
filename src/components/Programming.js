import React from "react";
import classes from "./Programming.module.css";
import { Fragment } from "react";

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
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <h4 className={`${classes['resume-title']}`}>Technical Skills</h4>
          {value.map((value, index) => {
            return (
              <Fragment>
                <div className="col-lg-6 col-md-6 col-sm-12 my-2">
                  <span className={classes["language"]}> {value.text}</span>
                  <div className={classes["progress-some"]}>
                    <div
                      className={classes["progress-new"]}
                      style={{ width: `${value.percentage}%` }}
                    >
                      {" "}
                      <small className="text-white mx-1">{value.percentage}%</small>
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
