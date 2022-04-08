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
      <div className="container d-flex flex-row justify-content-center">
        <NotFoundLottie />
      </div>
    </Fragment>
  );
};

export default NotFound;
