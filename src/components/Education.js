import React, { Fragment } from "react";
// import Carousel from "react-elastic-carousel";
import Slider from "react-slick";
import classes from "./Education.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#8e44ad",
        borderRadius: "50%",
        paddingTop: "1px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#8e44ad",
        borderRadius: "50%",
        paddingTop: "1px",
      }}
      onClick={onClick}
    />
  );
}

export default function Education() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    pauseOnHover: true,
    focusOnSelect: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
          <Slider {...settings}>
            {items.map((item) => (
              <img src={item.src} key={item.id} />
            ))}
          </Slider>
          {/* End Certifications */}
        </div>
      </div>
    </Fragment>
  );
}
