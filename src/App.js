import "./styles.css";
import avatar from "./assets/Caraan.png";
import { useState } from "react";
import Education from "./components/Education";
import Work from "./components/Work";
import Programming from "./components/Programming";
import Projects from "./components/Projects";

export default function App() {
  const [education, setEducation] = useState(true);
  const [workhistory, setWorkHistory] = useState(false);
  const [programming, setProgramming] = useState(false);
  const [projects, setProjects] = useState(false);

  function SetAllFalse() {
    setEducation(false);
    setWorkHistory(false);
    setProgramming(false);
    setProjects(false);
  }

  function ChangeState(function1, state1) {
    SetAllFalse();
    function1(state1);
  }

  return (
    <div className="App">
      {/* ========= Start Hero Section ========= */}
      <section className="herosection px-10 py-5">
        <nav className="d-flex flex-row justify-content-between">
          <span className="brand-name"> Dev_Caraan</span>
          <div className="d-flex flex-row">
            <span className="mx-4 nav-items">Home </span>
            <span className="mx-4 nav-items">About me</span>
            <span className="mx-4 nav-items">Resume </span>
            <span className="mx-4 nav-items">Testimonial </span>
            <span className="mx-4 nav-items">Contact </span>
          </div>
        </nav>

        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-4 col-md-4-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello, I'm
                <span className="name-Im-text"> Caraan, Carl Aaron</span>
              </span>
              <span className="Im-text-enthusiastic py-2">
                Full Stack Web Developer 👨‍💻
              </span>
              <span className="Im-text-subheading">
                I'm 22 years old passionate coder
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <button className="btn-hire-me">Hire Me</button>
                <button className="btn-resume-me">Get Resume</button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="d-flex justify-content-center custom-div-outer-img text-center pt-5">
              <img
                className="img-fluid custom-avatar shadow-sm img-thumbnail"
                src={avatar}
                alt="heroimage"
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="d-flex justify-content-center custom-div-outer-img text-center">
              <lottie-player
                src="https://assets4.lottiefiles.com/datafiles/fab7172a9302d416bcdb8ac7e1c71123/data.json"
                background="transparent"
                speed="1"
                style={{ width: "300px", height: "300px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
      </section>
      <h1 className="text-center main-caption">
        ~ Let's Build Something Epic! :)
      </h1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,96L48,106.7C96,117,192,139,288,133.3C384,128,480,96,576,85.3C672,75,768,85,864,106.7C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      {/* ========= End Hero Section ========= */}

      {/* ========= Start About Section ========= */}
      <section className="about-me-section aboutme-inside pb-5">
        <div className="d-flex flex-column">
          <span className="section-heading">About me</span>
          <span className="section-subheading">Why Choose me?</span>
          <div className="row justify-content-center shadow-lg my-5 about-content-wrapper container">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_e7y2w0zq.json"
                background="transparent"
                speed="1"
                style={{ width: "500px", height: "500px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column py-5">
              <span className="some-text-about-me">
                "I'm a Full Stack Web Developer with background knowledge in
                ReactJs, Laravel and Flask. Strong professional with Bachelor of
                Science in Information Technology willing to be an asset for an
                organization."
              </span>
              <span className="few-highlights">
                <span className="few-text">SKILLS:</span>
                <span className="few-list">
                  <ul>
                    <li>Strong knowledge in HTML, CSS and JavaScript.</li>
                    <li>Veteran in PHP, Python, Javascript and Jquery.</li>
                    <li>Bootstrap 5 and 4 and UX/UI Figma.</li>
                    <li>Database: MySQL.</li>
                    <li>Frameworks: Laravel, ReactJs and Flask.</li>
                    <li>Environment and Tools: VS Code, Git and Github.</li>
                    <li>Proficient in MS Word, Excel and Powerpoint.</li>
                    <li>Able to work under pressure and in tight schedules.</li>
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* ========= End About Section ========= */}

      {/* ========= Start Resume Section ========= */}
      <div className="resume-outer-section d-flex flex-column">
        <span className="section-heading">Resume</span>
        <span className="section-subheading">My formal Bio Details</span>

        <div
          className="resume-new-section row container"
          style={{ marginInline: "auto" }}
        >
          <div className="col-lg-4 col-md-4 resume-left-section d-flex flex-row shadow-sm">
            <div className="d-flex flex-column bg-new">
              <span className="icons-span">
                <i className="fas fa-user-graduate"></i>
              </span>
              <span className="icons-span">
                <i className="fas fa-briefcase"></i>
              </span>
              <span className="icons-span">
                <i className="fas fa-code"></i>
              </span>
              <span className="icons-span">
                <i className="fas fa-project-diagram"></i>
              </span>
            </div>

            <div className="d-flex flex-column">
              <span
                className={
                  education === false
                    ? "resume-options-items"
                    : "resume-options-items selected"
                }
                onClick={() => {
                  ChangeState(setEducation, true);
                }}
              >
                Educational
              </span>
              <span
                className={
                  workhistory === false
                    ? "resume-options-items"
                    : "resume-options-items selected"
                }
                onClick={() => {
                  ChangeState(setWorkHistory, true);
                }}
              >
                Work
              </span>
              <span
                className={
                  programming === false
                    ? "resume-options-items"
                    : "resume-options-items selected"
                }
                onClick={() => {
                  ChangeState(setProgramming, true);
                }}
              >
                Programming
              </span>
              <span
                className={
                  projects === false
                    ? "resume-options-items"
                    : "resume-options-items selected"
                }
                onClick={() => {
                  ChangeState(setProjects, true);
                }}
              >
                Projects
              </span>
            </div>
          </div>

          <div className="col-lg-8 col-md-8 resume-right-section shadow-sm">
            {education === true && <Education />}
            {workhistory === true && <Work />}
            {programming === true && <Programming />}
            {projects === true && <Projects />}
          </div>
        </div>
      </div>
      {/* ========= End Resume Section ========= */}
    </div>
  );
}
