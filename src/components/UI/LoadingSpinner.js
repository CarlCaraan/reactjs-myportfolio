import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={`${classes["centered"]}`}>
      <div className={`${classes["loader-container"]}`}>
        <div className={`${classes["loader"]}`}>
          <div className={`${classes["square"]} ${classes["one"]}`}></div>
          <div className={`${classes["square"]} ${classes["two"]}`}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
