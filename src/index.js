import { createRoot } from "react-dom/client";
// import {App} from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { Home } from "./ui/Home";
import { StrictMode } from "react";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <Home tab="home" />
  </StrictMode>
);
