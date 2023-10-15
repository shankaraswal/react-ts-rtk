import { Grid } from "@mui/material";
import React from "react";

export const PageNotFound = () => {
  return (
    <Grid sx={{ my: 15, mx: 10 }}>
      <h2>Page not found</h2>
      <p>
        We built the new RouterProvider component such that it would enable the
        new Data APIs on routes defined at the root router, while not excluding
        descendant Routes trees so commonly used in BrowserRouter apps. This was
        explicitly to allow incremental migration from one to the other. Let's
        take a look at how we would do this.
      </p>

      <h4>Current Application</h4>
      <p>
        Let's assume we've got a current application with 2 descendant route
        trees, and assume these routes are all doing in-component data fetching,
        and rendering their own loading and error states.
      </p>
    </Grid>
  );
};
