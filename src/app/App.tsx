import React from "react";
import { Layout } from "../global/components/layout/Layout";
// import { Login } from "./login/Login";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Layout />
      {/* <Login /> */}
    </React.Fragment>
  );
};

export default App;
