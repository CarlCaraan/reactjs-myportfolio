import "../styles.css";
import avatar from "../assets/Caraan.png";
import { useState, useEffect } from "react";
import Education from "../components/Education";
import Work from "../components/Work";
import Programming from "../components/Programming";
import Projects from "../components/Projects";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Aos from "aos";
import "aos/dist/aos.css";
import CubeLottie from "../components/Animations/CubeLottie";
import ReactLottie from "../components/Animations/ReactLottie";
import MainNavigation from "../components/layout/MainNavigation";
import MainFooter from "../components/layout/MainFooter";
import { Link } from "react-scroll";

const LandingPage = () => {
  const [education, setEducation] = useState(true);
  const [workhistory, setWorkHistory] = useState(false);
  const [programming, setProgramming] = useState(false);
  const [projects, setProjects] = useState(false);

  var age = new Date().getFullYear().toString().slice(-2);

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
      disable: "mobile",
      once: true,
    });
  }, []);

  return (
    <div className="App">
      {/* ========= Start Messanger API Section ========= */}
      <MessengerCustomerChat pageId="105571677920395" appId="405852008017560" />
      {/* ========= End Messanger API Section ========= */}

      {/* ========= Start Navigation Section ========= */}
      <MainNavigation />
      {/* ========= End Navigation Section ========= */}

      {/* ========= Start Hero Section ========= */}
      <section className="herosection py-2">
        <div className="herosection-body row justify-content-center">
          <div className="col-xl-4 col-lg-12 col-md-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello, I'm
                <span className="name-Im-text"> Caraan, Carl Aaron</span>
              </span>
              <span className="Im-text-enthusiastic mt-2">
                Aspiring Software Engineer{" "}
                <i className="fas fa-laptop-code"></i>
              </span>
              <span className="Im-text-email mt-2">bannedefused@gmail.com</span>

              <div className="d-flex flex-row justify-content-center mt-3">
                <div className="row">
                  <div className="col-sm-6">
                    <Link
                      className="btn w-100 mb-2 herosection-button"
                      to="contact"
                      offset={50}
                    >
                      <span className="px-5">Contact</span>
                    </Link>
                  </div>
                  <div className="col-sm-6">
                    <a
                      href="../assets/downloads/CarlCaraan.pdf"
                      className="btn w-100 herosection-button"
                      target="_blank"
                    >
                      <span className="px-5">Resume</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-12 col-md-12">
            <div className="d-flex justify-content-center text-center pt-5">
              <img
                className="img-fluid custom-avatar shadow-sm img-thumbnail"
                src={avatar}
                alt="heroimage"
              />
            </div>
          </div>

          <div className="col-xl-4 col-lg-12 col-md-12 disable-mobile">
            <div className="d-flex justify-content-center">
              <ReactLottie />
            </div>
          </div>
        </div>
        <h1 className="text-center main-caption" data-aos="fade">
          &lt;Let's Build Something Epic/&gt;
        </h1>
        <div className="row">
          <ul className="fa-2x mt-3 mb-0 herosection-social-icons">
            <li>
              <a
                href="https://www.facebook.com/caraancarl/"
                target="_blank"
                className="herosection-a-icons"
              >
                <i className="fab fa-facebook mx-2"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/carl-aaron-caraan-b862aa220/"
                target="_blank"
                className="herosection-a-icons"
              >
                <i className="fab fa-linkedin mx-2"></i>
              </a>
            </li>
            <li>
              <a
                href="https://steamcommunity.com/id/MySteamProfileLink/"
                target="_blank"
                className="herosection-a-icons"
              >
                <i className="fab fa-steam mx-2"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/CarlCaraan"
                target="_blank"
                className="herosection-a-icons"
              >
                <i className="fab fa-github mx-2"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/dev_plousious/"
                target="_blank"
                className="herosection-a-icons"
              >
                <i className="fab fa-instagram-square mx-2"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        data-aos="slide-up"
      >
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,96L48,106.7C96,117,192,139,288,133.3C384,128,480,96,576,85.3C672,75,768,85,864,106.7C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      {/* ========= End Hero Section ========= */}

      {/* ========= Start About Section ========= */}
      <section className="about-me-section aboutme-inside pb-5" id="about">
        <div className="d-flex flex-column">
          <span className="section-heading" data-aos="fade-up">
            About me
          </span>
          <span className="section-subheading" data-aos="fade-up">
            Why Choose me?
          </span>
          <div
            className="row justify-content-center shadow-lg my-5 about-content-wrapper container"
            data-aos="fade-up"
          >
            <div className="text-center pt-5">
              <ion-icon name="logo-html5"></ion-icon>
              <ion-icon name="logo-sass"></ion-icon>
              <ion-icon name="logo-css3"></ion-icon>
              <ion-icon name="logo-javascript"></ion-icon>
              <ion-icon name="logo-react"></ion-icon>
              <ion-icon name="logo-nodejs"></ion-icon>
              <ion-icon name="logo-laravel"></ion-icon>
              <ion-icon name="logo-npm"></ion-icon>
              <ion-icon name="logo-python"></ion-icon>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <CubeLottie />
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12 d-flex flex-column py-5">
              <div className="container aboutme-right-section">
                <div className="some-text-about-me">
                  &nbsp; A {age}-year-old{" "}
                  <strong>Full Stack Web Developer</strong> based in Laguna,
                  Philippines with background knowledge mostly in React and
                  Laravel. Skilled in Frontend technologies such as Html, CSS,
                  Javascript, Bootstrap, and Backend technologies such as Php,
                  Python, NodeJs, and MySQL. Learning a variety of scripting
                  languages and technology stacks is one of my strengths. I am
                  also a hard worker and a team player. I am looking for a
                  challenging opportunity that will enable me to use my skills
                  and abilities to achieve a challenging goal.
                </div>

                <div className="few-highlights mt-3">
                  <span className="few-text">SKILLS:</span>
                  <span className="few-list">
                    <ul>
                      <li>Strong knowledge in HTML, CSS and JavaScript.</li>
                      <li>Veteran in PHP, Python, Javascript and Jquery.</li>
                      <li>Bootstrap 5 and 4 and UX/UI Figma.</li>
                      <li>Database: MySQL.</li>
                      <li>Frameworks: Laravel and React.</li>
                      <li>Environment and Tools: VS Code, Git and Github.</li>
                      <li>Proficient in MS Word, Excel and Powerpoint.</li>
                      <li>
                        Able to work under pressure and in tight schedules.
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center pb-5">
              <ion-icon name="logo-html5"></ion-icon>
              <ion-icon name="logo-sass"></ion-icon>
              <ion-icon name="logo-css3"></ion-icon>
              <ion-icon name="logo-javascript"></ion-icon>
              <ion-icon name="logo-react"></ion-icon>
              <ion-icon name="logo-nodejs"></ion-icon>
              <ion-icon name="logo-laravel"></ion-icon>
              <ion-icon name="logo-npm"></ion-icon>
              <ion-icon name="logo-python"></ion-icon>
            </div>
          </div>
        </div>
      </section>
      {/* ========= End About Section ========= */}

      {/* ========= Start Resume Section ========= */}
      <section className="resume-outer-section d-flex flex-column" id="resume">
        <span className="section-heading" data-aos="fade-up">
          Resume
        </span>
        <span className="section-subheading" data-aos="fade-up">
          My formal Bio Details
        </span>
        <br />
        <div
          className="resume-new-section row container"
          data-aos="fade-up"
          style={{ marginInline: "auto" }}
        >
          <div className="col-xl-4 col-lg-5 col-md-12 resume-left-section d-flex flex-row shadow-sm">
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

          <div className="col-xl-8 col-lg-7 col-md-12 resume-right-section shadow-sm">
            {education === true && <Education />}
            {workhistory === true && <Work />}
            {programming === true && <Programming />}
            {projects === true && <Projects />}
          </div>
        </div>
      </section>
      {/* ========= End Resume Section ========= */}

      {/* ========= Start Testimonial Section ========= */}
      <section className="text-center pb-5" id="testimonial">
        {/* Start Background Image */}
        <div className="testimonial-bg-image"></div>
        {/* End Background Image */}
        <div className="d-flex flex-column caption">
          <span className="section-heading" data-aos="fade-up">
            Testimonials
          </span>
          <span className="section-subheading" data-aos="fade-up">
            What My Clients Say About Me
          </span>
        </div>

        <Testimonial />
      </section>
      {/* ========= End Testimonial Section ========= */}

      {/* ========= Start Contact Section ========= */}
      <section className="contact-me-part" id="contact">
        <div className="container">
          <Contact />
        </div>
      </section>
      {/* ========= End Contact Section ========= */}

      {/* ========= Start Footer Section ========= */}
      <MainFooter />
      {/* ========= End Footer Section ========= */}
    </div>
  );
};

export default LandingPage;
