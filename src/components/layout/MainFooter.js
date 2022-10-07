import { Fragment } from "react";
import ScrollToTop from "react-scroll-to-top";

const MainFooter = () => {
  var date = new Date().getFullYear();
  return (
    <Fragment>
      <section className="bg-dark pt-5 pb-4">
        <footer className="container">
          <div className="row">
            <div className="col-md-8">
              <span className="brand-name text-white footer-mobile">
                Dev_Caraan <i className="fas fa-code fa-sm"></i>
              </span>
              <p className="text-white mt-3 footer-mobile">
                <i>
                  "Empty your mind. Be formless, shapeless — like water. You put
                  water into a cup, it becomes the cup. You put water into a
                  bottle, it becomes the bottle." -Bruce Lee
                </i>
              </p>
            </div>
            <div className="col-md-4">
              <small className="text-white float-end mt-3 footer-mobile">
                Powered by <i className="fab fa-react"></i> ReactJs.
              </small>
              <br />
              <br />
              <div
                className="float-end footer-icon-wrapper"
                data-aos="flip-down"
              >
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
            </div>
          </div>
          <br />
          <div className="text-center w-100">
            <small className="text-white">
              Copyright &copy; {date} Carl Caraan . All Rights Reserved.
            </small>
          </div>
        </footer>
      </section>
      <ScrollToTop smooth color="#8e44ad" top="300" />
    </Fragment>
  );
};

export default MainFooter;
