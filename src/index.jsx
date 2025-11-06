import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import { createGlobalStyle } from "styled-components";
import React from "react";

const GlobalStyle = createGlobalStyle`
body{
margin: 0px;
padding: 0px;
}
`;
const root = createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
