import React from "react";
import ReactDOM from "react-dom";
import PublicRoutes from "./mainRouter";
import { Provider } from "./Context/GlobalContext";

import "./index.css";
import "antd/dist/antd.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <PublicRoutes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
