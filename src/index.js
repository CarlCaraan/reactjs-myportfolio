import { StrictMode } from "react";
import ReactDOM from "react-dom";
import SimpleReactLightbox from "simple-react-lightbox";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </StrictMode>,
  rootElement
);
