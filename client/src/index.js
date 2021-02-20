import React from "react";
import ReactDOM from "react-dom";
import PublicRoutes from "./mainRouter";

import "./index.css";
import "antd/dist/antd.css";

ReactDOM.render(
  <React.StrictMode>
    <PublicRoutes />
  </React.StrictMode>,
  document.getElementById("root")
);
