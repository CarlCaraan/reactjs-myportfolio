import React, { Fragment } from "react";
import classes from "./Projects.module.css";
import { SRLWrapper } from "simple-react-lightbox";

export default function Projects() {
  const state = {
    items: [
      {
        id: 1,
        src: "../../assets/images/projects/project8.jpg",
        href: "#",
        name: "SB Information System",
        tag1: "Php",
        tag2: "Bootstrap",
        tag3: "MySQL",
      },
      {
        id: 2,
        src: "../../assets/images/projects/project9.jpg",
        href: "#",
        name: "Booking Management System",
        tag1: "Flask",
        tag2: "Bootstrap",
        tag3: "SQLite",
      },
      {
        id: 3,
        src: "../../assets/images/projects/project1.png",
        href: "../../assets/downloads/project1.pdf",
        name: "Social Media App",
        tag1: "Javascript",
        tag2: "Php",
        tag3: "Bootstrap",
      },
      {
        id: 4,
        src: "../../assets/images/projects/project2.png",
        href: "#",
        name: "Business Permit Registration",
        tag1: "Javascript",
        tag2: "Php",
        tag3: "Bootstrap",
      },
      {
        id: 5,
        src: "../../assets/images/projects/project4.png",
        href: "../../assets/downloads/project4.pdf",
        name: "Online News Portal",
        tag1: "Laravel",
        tag2: "MySQL",
        tag3: "Bootstrap",
      },
      {
        id: 6,
        src: "../../assets/images/projects/project5.png",
        href: "../../assets/downloads/project5.pdf",
        name: "Content Management System",
        tag1: "Laravel",
        tag2: "MySQL",
        tag3: "Bootstrap",
      },
      {
        id: 7,
        src: "../../assets/images/projects/project6.png",
        href: "../../assets/downloads/project6.pdf",
        name: "Online Employment System",
        tag1: "Flask",
        tag2: "Bootstrap",
        tag3: "SQLite",
      },
      {
        id: 8,
        src: "../../assets/images/projects/project3.png",
        href: "#",
        name: "School Management System",
        tag1: "Laravel",
        tag2: "MySQL",
        tag3: "Bootstrap",
      },
      {
        id: 9,
        src: "../../assets/images/projects/project7.png",
        href: "../../assets/downloads/project7.pdf",
        name: "Lazapee ECommerce Website",
        tag1: "ReactJs",
        tag2: "Laravel",
        tag3: "RestAPI",
      },
      {
        id: 10,
        src: "../../assets/images/projects/project10.png",
        href: "../../assets/downloads/project10.pdf",
        name: "Loaning Management System",
        tag1: "Php",
        tag2: "MySQL",
        tag3: "Bootstrap",
      },
      {
        id: 11,
        src: "../../assets/images/projects/project11.png",
        href: "../../assets/downloads/project11.pdf",
        name: "School Information System",
        tag1: "Php",
        tag2: "MySQL",
        tag3: "Bootstrap",
      },
      {
        id: 12,
        src: "../../assets/images/projects/project12.png",
        href: "../../assets/downloads/project12.pdf",
        name: "Gym Reservation System",
        tag1: "Laravel",
        tag2: "MySQL",
        tag3: "Bootstrap",
      },
    ],
  };
  const { items } = state;
  return (
    <Fragment>
      <div className="container-fluid">
        <h4 className={`${classes["resume-title"]}`}>Recent Projects</h4>
        <p>
          Ever since I challenge myself to create a different project, I always
          enjoyed web development. Here are some of the projects I worked on
          both in and outside of my studies
        </p>
        <br />
        <SRLWrapper>
          <div className="row">
            {items.reverse().map((item) => (
              <div className="col-xl-4 mb-5" key={item.id}>
                <h6 className="text-center">
                  <a
                    className={`${classes["project-link-heading"]}`}
                    href={item.href}
                    target="_blank"
                  >
                    {item.name}
                  </a>
                </h6>
                <img
                  className={`${classes["img-custom"]} img-thumbnail img-fluid`}
                  src={item.src}
                />
                <div className="d-flex flex-row">
                  <span
                    className={`${classes["project-tags"]} d-flex flex-column`}
                  >
                    {item.tag1}
                  </span>
                  <span
                    className={`${classes["project-tags"]} d-flex flex-column`}
                  >
                    {item.tag2}
                  </span>
                  <span
                    className={`${classes["project-tags"]} d-flex flex-column`}
                  >
                    {item.tag3}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </SRLWrapper>
      </div>
    </Fragment>
  );
}
