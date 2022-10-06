import { Fragment } from "react";
import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <Fragment>
      <div className={`${classes["loader"]}`}>
        <span>CarlCaraan</span>
        <span>CarlCaraan</span>
      </div>
      {/* <div className={`${classes["centered"]}`}>
      <div className={`${classes["loader-container"]}`}>
        <div className={`${classes["loader"]}`}>
          <div className={`${classes["square"]} ${classes["one"]}`}></div>
          <div className={`${classes["square"]} ${classes["two"]}`}></div>
        </div>
      </div>
    </div> */}
    </Fragment>
  );
};

export default LoadingSpinner;
