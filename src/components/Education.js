import React from "react";
import classes from "./Education.module.css";
import { Fragment } from "react";

export default function Education() {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="d-flex flex-column">

          {/* Start Timeline */}
          <h4 className={`${classes['resume-title']}`}>Timeline</h4>
          <div
            className={`${classes["education-one"]} my-3 justify-content-between d-flex flex-row`}
          >
            <div className={`${classes["new-one"]} d-flex flex-column`}>
              <span className={`${classes["university-name"]}`}>
                Laguna State Polytechinic University
              </span>
              <span className={`${classes["university-degree"]}`}>
                Bachelor of Science in Information Technology
              </span>
            </div>
            <span
              className={`${classes["year-passedout"]} badge bg-secondary`}
            >
              2019 - 2023
            </span>
          </div>

          <div
            className={`${classes["education-one"]} my-3 justify-content-between d-flex flex-row`}
          >
            <div className={`${classes["new-one"]} d-flex flex-column`}>
              <span className={`${classes["university-name"]}`}>
                Santa Maria Academy
              </span>
              <span className={`${classes["university-degree"]}`}>
                Senior Highschool
              </span>
            </div>
            <span
              className={`${classes["year-passedout"]} badge bg-secondary`}
            >
              2017 - 2019
            </span>
          </div>

          <div
            className={`${classes["education-one"]} my-3 justify-content-between d-flex flex-row`}
          >
            <div className={`${classes["new-one"]} d-flex flex-column`}>
              <span className={`${classes["university-name"]}`}>
                Santa Maria Academy
              </span>
              <span className={`${classes["university-degree"]}`}>
                Junior Highschool
              </span>
            </div>
            <span
              className={`${classes["year-passedout"]} badge bg-secondary`}
            >
              2014 - 2017
            </span>
          </div>
          {/* End Timeline */}

          {/* Start Accreditation */}
          <br/>
          <hr />  
          <h4 className={`${classes['resume-title']}`}>Accreditations</h4>
          <ul>
            <li>
              <span className={`${classes['accreditation-list']}`}>
                Since 1st year college Dean's Lister.
              </span>
            </li>
            <li>
              <span className={`${classes['accreditation-list']}`}>
                Ncae Topnocher (Highschool).
              </span>
            </li>
          </ul>
          {/* End Accreditation */}

          {/* Start Certifications */}
          <br/>
          <hr />  
          <h4 className={`${classes['resume-title']}`}>Certifications</h4>
          
        </div>
      </div>
    </Fragment>
  );
}
