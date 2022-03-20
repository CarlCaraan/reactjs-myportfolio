import React, { Fragment } from "react";
import classes from "./Work.module.css";

export default function Work() {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="d-flex flex-column">
          <h4 className={`${classes['resume-title']}`}>Experiences</h4>
          <div
            className={`${classes["work-one"]} my-4 justify-content-between d-flex flex-row`}
          >
            <div className={`${classes["new-one"]} d-flex flex-column`}>
              <span className={`${classes["work-name"]}`}>
                Freelancer
              </span>
              <span className={`${classes["work-role"]}`}>
                Web Developer | Full Stack Developer
              </span>
              <ul>
                <li>
                  <span className={`${classes["work-list"]}`}>
                    Created a Business Permit Registration made in Core PHP
                  </span>
                </li>
              </ul>
            </div>
            <span
              className={`${classes["year-passedout"]} badge bg-secondary`}
            >
              2020 - Present
            </span>
          </div>

        </div>
      </div>
    </Fragment>
  );
}
