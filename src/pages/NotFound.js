import MainNavigation from "../components/layout/MainNavigation";
import MainFooter from "../components/layout/MainFooter";
import { Fragment, useEffect } from "react";
import NotFoundLottie from "../components/Animations/NotFoundLottie";
import Aos from "aos";
import "aos/dist/aos.css";

const NotFound = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      disable: "mobile",
      once: true,
    });
  }, []);
  return (
    <Fragment>
      <MainNavigation />
      <div className="container d-flex flex-row justify-content-center">
        <NotFoundLottie />
      </div>
      <MainFooter />
    </Fragment>
  );
};

export default NotFound;
