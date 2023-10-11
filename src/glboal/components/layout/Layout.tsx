import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import LoginImage from "../../../assets/images/login.jpeg";
import CardMedia from "@mui/material/CardMedia";

export const Layout = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      wrap="wrap"
      columnSpacing={{ xs: 1, sm: 2 }}
    >
      <Grid xs={8}></Grid>
      <Grid xs={4}> asdf asdfasdfas</Grid>
    </Grid>
  );
};
