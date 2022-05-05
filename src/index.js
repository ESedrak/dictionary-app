import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

// Components should be followed as below (helps understand the structure of the app)
// 1. App
// 2.Dictionary
// 3.Results and Photos
// 4. (Results) Phonetics and Meaning
// 5. Footer

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
