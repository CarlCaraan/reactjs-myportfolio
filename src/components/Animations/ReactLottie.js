import React, { Fragment } from "react";
// import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";

class ReactLottie extends React.Component {
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
        player: "#reactLottie",
        actions: [
          {
            state: "autoplay",
            transition: "click",
          },
          {
            path: "https://assets1.lottiefiles.com/packages/lf20_3vnbebdl.json",
            state: "autoplay",
            transition: "click",
          },
        ],
      });
    });
  }
  render() {
    return (
      <Fragment>
        <a href="#" title="clickme!">
          <lottie-player
            ref={this.myRef} // 2. set the reference for the player
            id="reactLottie"
            src="https://assets1.lottiefiles.com/packages/lf20_b23ll34c.json"
            background="transparent"
            speed="1"
            style={{ width: "300px", height: "300px" }}
            autoplay
          ></lottie-player>
        </a>
      </Fragment>
    );
  }
}

export default ReactLottie;
