import React from "react";
import { RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import { appRoutes } from "../routes/AppRoutes";
const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <RouterProvider router={appRoutes} />
    </React.Fragment>
  );
};

export default App;
