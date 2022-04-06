import React, { Fragment } from "react";
// import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";

class NotFoundLottie extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // 1. create a reference for the lottie player
  }
  componentDidMount() {
    // 3. listen for player load. see lottie player repo for other events
    this.myRef.current.addEventListener("load", function (e) {
      // 4. configure the interactivity library
      create({
        mode: "chain",
        player: "#notfoundLottie",
        actions: [
          {
            state: "autoplay",
            frames: [0, 64],
          },
        ],
      });
    });
  }
  render() {
    return (
      <Fragment>
        <lottie-player
          ref={this.myRef} // 2. set the reference for the player
          id="notfoundLottie"
          src="https://assets2.lottiefiles.com/packages/lf20_dc8o2lwo.json"
          background="transparent"
          speed="1"
          style={{ height: "100%", width: "100%" }}
          autoplay
        ></lottie-player>
      </Fragment>
    );
  }
}

export default NotFoundLottie;
