import "./styles.css";
import avatar from "./assets/Caraan.png";
import { useState,useEffect } from "react";
import Education from "./components/Education";
import Work from "./components/Work";
import Programming from "./components/Programming";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import ScrollToTop from "react-scroll-to-top";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Aos from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true
    });
  }, []);

  return (
    <div className="App">
      {/* ========= Start Messanger API Section ========= */}
      <MessengerCustomerChat pageId="105571677920395" appId="405852008017560" />
      {/* ========= End Messanger API Section ========= */}

      {/* ========= Start Navigation Section ========= */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid px-5 py-4">
          <a className="brand-name navbar-brand" href="#">
            Dev_Caraan
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link me-2"
                  href="https://github.com/CarlCaraan"
                  target="_blank"
                >
                  <span className="border border-2 rounded p-1">
                    <i className="fab fa-github custom-icons text-secondary"></i>
                    <small> Visit me on Github</small>
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#resume">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#testimonial">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ========= End Navigation Section ========= */}

      {/* ========= Start Hero Section ========= */}
      <section className="herosection px-10 py-2">
        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-4 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello, I'm
                <span className="name-Im-text"> Caraan, Carl Aaron</span>
              </span>
              <span className="Im-text-enthusiastic mt-2">
                Full Stack Web Developer 👨‍💻
              </span>
              <span className="Im-text-email mt-2">bannedefused@gmail.com</span>
              <div className="d-flex flex-row justify-content-center mt-3">
                <div className="row">
                  <div className="col-sm-6">
                    <a
                      className="btn btn-outline-success w-100 mb-2 herosection-button"
                      href="#contact"
                    >
                      Hire Me
                    </a>
                  </div>
                  <div className="col-sm-6">
                    <a
                      href="../assets/downloads/resume.pdf"
                      className="btn btn-outline-success w-100 herosection-button"
                      download
                    >
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12">
            <div className="d-flex justify-content-center custom-div-outer-img text-center pt-5">
              <img
                className="img-fluid custom-avatar shadow-sm img-thumbnail"
                src={avatar}
                alt="heroimage"
              />
            </div>
          </div>

          <div className="col-lg-4 col-sm-12">
            <div className="d-flex justify-content-center custom-div-outer-img text-center">
              <lottie-player
                src="https://assets4.lottiefiles.com/datafiles/fab7172a9302d416bcdb8ac7e1c71123/data.json"
                background="transparent"
                speed="1"
                style={{ width: "300px", height: "300px" }}
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
        <h1 className="text-center main-caption" data-aos="fade-up">
          ~ Let's Build Something Epic! :)
        </h1>
      </section>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,96L48,106.7C96,117,192,139,288,133.3C384,128,480,96,576,85.3C672,75,768,85,864,106.7C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      {/* ========= End Hero Section ========= */}

      {/* ========= Start About Section ========= */}
      <section
        className="about-me-section aboutme-inside pb-5 offset"
        id="about"
      >
        <div className="d-flex flex-column">
          <span className="section-heading" data-aos="fade-up">About me</span>
          <span className="section-subheading" data-aos="fade-up">Why Choose me?</span>
          <div className="row justify-content-center shadow-lg my-5 about-content-wrapper container" data-aos="fade-up">
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
                Full Stack Web Developer with background knowledge mostly in
                ReactJs, Laravel and Flask. Skilled in Front End technologies
                such as Html, CSS, Javascript, React, Bootstrap and Sass, and
                Back End technologies such as Php, Python NodeJs, and MySQL.
                Learning a variety of scripting languages and APIs is one of my
                strengths. I am also a hard worker and a team player. I am
                looking for a challenging opportunity that will enable me to use
                my skills and abilities to achieve a challenging goal.
              </span>
              <br />
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
      <section
        className="resume-outer-section d-flex flex-column offset"
        id="resume"
      >
        <span className="section-heading" data-aos="fade-up">Resume</span>
        <span className="section-subheading" data-aos="fade-up">My formal Bio Details</span>
        <br/>
        <div
          className="resume-new-section row container" data-aos="fade-up"
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
      </section>
      {/* ========= End Resume Section ========= */}

      {/* ========= Start Testimonial Section ========= */}
      <section className="text-center pb-5 offset" id="testimonial">
        {/* Start Background Image */}
        <div className="testimonial-bg-image"></div>
        {/* End Background Image */}
        <div className="d-flex flex-column caption">
          <span className="section-heading" data-aos="fade-up">Testimonials</span>
          <span className="section-subheading" data-aos="fade-up">
            What My Clients Say About Me
          </span>
        </div>

        <Testimonial />
      </section>
      {/* ========= End Testimonial Section ========= */}

      {/* ========= Start Contact Section ========= */}
      <section className="contact-me-part offset" id="contact">
        <div className="container">
          <Contact />
        </div>
      </section>
      {/* ========= End Contact Section ========= */}

      {/* ========= Start Footer Section ========= */}
      <footer>
        <div className="bg-dark pt-5 pb-4 text-center">
          <span className="brand-name text-white"> Dev_Caraan</span>
          <p className="text-white mt-3 col-lg-4 col-md-4 col-sm-3 mx-auto">
            My name is Carl Aaron Caraan and I'm from Laguna, Philippines. I'm
            22 years old and currently student as a Bachelor of Science in
            Information Technology.
          </p>
          <small className="text-white">
            Powered by <i className="fab fa-react"></i> ReactJs.
          </small>

          <div className="mt-3">
            <a href="https://github.com/CarlCaraan" target="_blank">
              <i className="fab fa-github fa-2x custom-icons"></i>
            </a>
            <a
              href="https://steamcommunity.com/id/MySteamProfileLink/"
              target="_blank"
            >
              <i className="fab fa-steam fa-2x ms-2 custom-icons"></i>
            </a>
            <a href="https://www.facebook.com/caraancarl/" target="_blank">
              <i className="fab fa-facebook fa-2x ms-2 custom-icons"></i>
            </a>
          </div>
          <br />
          <small className="text-white">
            © 2022 Carl Caraan. All Rights Reserved.
          </small>
        </div>
        <ScrollToTop smooth color="#8e44ad" top="1000" />
      </footer>
      {/* ========= End Footer Section ========= */}
    </div>
  );
}
