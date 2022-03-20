import React from "react";
import { Fragment } from "react";
import classes from "./Projects.module.css";
import { SRLWrapper } from "simple-react-lightbox";

export default function Projects() {
  const state = {
    items: [
      {
        id: 1,
        src: "../../assets/images/projects/project1.png",
        name: "Twitbook - Social Media App",
        tag1: "Javascript",
        tag2: "Php",
        tag3: "Bootstrap",
      },
      {
        id: 2,
        src: "../../assets/images/projects/project2.png",
        name: "Business Permit Registration",
        tag1: "Javascript",
        tag2: "Php",
        tag3: "Bootstrap",
      },
      {
        id: 3,
        src: "../../assets/images/projects/project3.png",
        name: "School Management System",
        tag1: "Laravel",
        tag2: "MySQL",
        tag3: "Bootstrap",
      },
      {
        id: 4,
        src: "../../assets/images/projects/project4.png",
        name: "Online News Portal",
        tag1: "Laravel",
        tag2: "MySQL",
        tag3: "Bootstrap",
      },
      {
        id: 5,
        src: "../../assets/images/projects/project5.png",
        name: "Content Management System",
        tag1: "Laravel",
        tag2: "MySQL",
        tag3: "Bootstrap",
      },
      {
        id: 6,
        src: "../../assets/images/projects/project6.png",
        name: "Online Employment System",
        tag1: "Flask",
        tag2: "Python",
        tag3: "SQL",
      },
      {
        id: 7,
        src: "../../assets/images/projects/project7.png",
        name: "Online Employment System",
        tag1: "ReactJs",
        tag2: "Javascript",
        tag3: "CSS",
      },
      {
        id: 8,
        src: "../../assets/images/projects/project8.png",
        name: "Goals Tracker App",
        tag1: "ReactJs",
        tag2: "Javascript",
        tag3: "CSS",
      },
      {
        id: 9,
        src: "../../assets/images/projects/project9.png",
        name: "Login System",
        tag1: "ReactJs",
        tag2: "Javascript",
        tag3: "CSS",
      },
      {
        id: 10,
        src: "../../assets/images/projects/project10.png",
        name: "User Tracker App",
        tag1: "ReactJs",
        tag2: "Javascript",
        tag3: "CSS",
      },
      {
        id: 11,
        src: "../../assets/images/projects/project11.png",
        name: "Food Ordering App",
        tag1: "ReactJs",
        tag2: "Javascript",
        tag3: "Bootstrap",
      },
      {
        id: 12,
        src: "../../assets/images/projects/project12.png",
        name: "PWA ECommerce Website",
        tag1: "ReactJs",
        tag2: "Laravel",
        tag3: "RestAPI",
      },
    ],
  };
  const { items } = state;
  return (
    <Fragment>
      <div className="container-fluid">
        <h4 className={`${classes["resume-title"]}`}>Projects</h4>
        <p>
          Ever since I challenge myself to create a different project, I always
          enjoyed web development. Here are some of the projects I worked on
          both in and outside of my studies
        </p>
        <br />
        <SRLWrapper>
          <div className="row">
            {items.map((item) => (
              <div className="col-xl-4 mb-5" key={item.id}>
                <h6 className="text-center section-subheading">{item.name}</h6>
                <img className={`${classes['img-custom']} img-thumbnail img-fluid`} src={item.src} />
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
