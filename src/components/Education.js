import React, { Component, Fragment } from "react";
import Carousel from "react-elastic-carousel";
import classes from "./Education.module.css";

export default function Education() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const state = {
    items: [
      { id: 1, src: "../../assets/images/certificates/cert1.jpg" },
      { id: 2, src: "../../assets/images/certificates/cert2.jpg" },
      { id: 3, src: "../../assets/images/certificates/cert3.jpg" },
      { id: 4, src: "../../assets/images/certificates/cert4.jpg" },
      { id: 5, src: "../../assets/images/certificates/cert5.jpg" },
      { id: 6, src: "../../assets/images/certificates/cert6.png" },
      { id: 7, src: "../../assets/images/certificates/cert7.jpg" },
      { id: 8, src: "../../assets/images/certificates/cert8.png" },
      { id: 9, src: "../../assets/images/certificates/cert9.jpg" },
    ],
  };
  const { items } = state;
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="d-flex flex-column">
          {/* Start Timeline */}
          <h4 className={`${classes["resume-title"]}`}>Timeline</h4>
          <p>Educational Background.</p>
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
            <span className={`${classes["year-passedout"]} badge bg-secondary`}>
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
            <span className={`${classes["year-passedout"]} badge bg-secondary`}>
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
            <span className={`${classes["year-passedout"]} badge bg-secondary`}>
              2013 - 2017
            </span>
          </div>
          {/* End Timeline */}

          {/* Start Accreditation */}
          <br />
          <hr />
          <h4 className={`${classes["resume-title"]}`}>Accreditations</h4>
          <ul>
            <li>
              <span className={`${classes["accreditation-list"]}`}>
                College Dean's Lister since 1st year.
              </span>
            </li>
            <li>
              <span className={`${classes["accreditation-list"]}`}>
                Ncae Topnocher (Highschool).
              </span>
            </li>
          </ul>
          {/* End Accreditation */}

          {/* Start Certifications */}
          <br />
          <hr />
          <h4 className={`${classes["resume-title"]}`}>Certifications</h4>
          <p>Earned from different online courses out there.</p>
          <br />
          <Carousel breakPoints={breakPoints}>
            {items.map((item) => (
              <img height="215px" src={item.src} key={item.id} />
            ))}
          </Carousel>
        </div>
      </div>
    </Fragment>
  );
}
