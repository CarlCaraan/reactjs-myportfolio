import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={`${classes["centered"]}`}>
      <div class={`${classes["loader-container"]}`}>
        <div class={`${classes["loader"]}`}>
          <div class={`${classes["square"]} ${classes["one"]}`}></div>
          <div class={`${classes["square"]} ${classes["two"]}`}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
