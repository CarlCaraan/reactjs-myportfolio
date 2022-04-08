import { Fragment } from "react";
import {Link} from "react-scroll";

const MainNavigation = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid px-5 py-4 navbar-wrapper">
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
                <Link className="nav-link" to="about" offset={-50}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="resume" offset={60}>
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="testimonial">
                  Testimonial
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default MainNavigation;
