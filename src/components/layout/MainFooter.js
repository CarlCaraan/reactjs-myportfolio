import { Fragment } from "react";
import ScrollToTop from "react-scroll-to-top";

const MainFooter = () => {
  return (
    <Fragment>
      <footer>
        <div className="bg-dark pt-5 pb-4 text-center">
          <span className="brand-name text-white">
            Dev_Caraan <i className="fas fa-code fa-sm"></i>
          </span>
          <p className="text-white mt-3 col-xxl-4 col-xl-6 col-lg-8 col-md-8 col-sm-12 px-2 mx-auto">
            My name is Carl Aaron Caraan lived in Laguna, Philippines. A
            passionate coder currently pursuing a Bachelor of Science in
            Information Technology.
          </p>
          <small className="text-white">
            Powered by <i className="fab fa-react"></i> ReactJs.
          </small>

          <div className="mt-3" data-aos="flip-down">
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
        <ScrollToTop smooth color="#8e44ad" top="300" />
      </footer>
    </Fragment>
  );
};

export default MainFooter;
