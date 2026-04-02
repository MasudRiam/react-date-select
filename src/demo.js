import React from "react";
import ReactDOM from "react-dom";
import SelectWithDateRange from "./SelectWithDateRange";

function mountDemo() {
  const root = document.getElementById("root");
  if (!root) {
    return false;
  }

  ReactDOM.render(React.createElement(SelectWithDateRange), root);
  return true;
}

if (!mountDemo()) {
  document.addEventListener("DOMContentLoaded", mountDemo, { once: true });
}
