import { StrictMode } from "react";
import ReactDOM from "react-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <StrictMode>
      <SimpleReactLightbox>
        <App />
      </SimpleReactLightbox>
    </StrictMode>
  </BrowserRouter>,
  rootElement
);
