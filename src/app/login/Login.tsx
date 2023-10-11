import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import LoginImage from "../../assets/images/login.avif";
import styles from "./Login.style.ts";
import { Box, Input, Stack, TextField, Button } from "@mui/material";
export const Login = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      wrap="wrap"
      sx={styles.loginContainer}
    >
      <Grid xs={8} className={"loginImageBlock"}>
        <img title="Login" src={LoginImage} />
      </Grid>
      <Grid xs={4} className={"loginFormBlock"}>
        <Box
          justifyContent={"center"}
          textAlign={"center"}
          sx={{ maxWidth: "70%", marginX: "auto" }}
        >
          <h2>User Login</h2>
          <TextField
            id="user-name"
            label="User Name"
            variant="outlined"
            fullWidth
            sx={{ mb: 3 }}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            fullWidth
            sx={{ mb: 3 }}
          />
          <Button
            variant="contained"
            color="success"
            size="large"
            fullWidth
            sx={{ mt: 3 }}
          >
            Login
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
