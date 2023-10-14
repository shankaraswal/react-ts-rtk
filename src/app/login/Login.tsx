import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import LoginImage from "../../assets/images/login.avif";
import { Box, Input, Stack, TextField, Button } from "@mui/material";
import styles from "./Login.module.scss";
export const Login = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      wrap="wrap"
      className={styles.loginContainer}
    >
      <Grid xs={7} className={styles.loginImageBlock}>
        <img title="Login" src={LoginImage} />
      </Grid>

      <Grid xs={5} className={styles.loginFormBlock} textAlign={"center"}>
        <h2>Sign-in</h2>
        <Grid direction={"row"}>

          <TextField
            id="user-name"
            label="User Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid direction={"row"}>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid direction={"row"}>
          <Button variant="contained" color="success" size="large" fullWidth>
            Login
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
