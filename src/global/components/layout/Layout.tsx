import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { ProductList } from "../../../app/product-list/ProductList";
import { Container } from "@mui/material";
import { Header } from "../header/Header";
import styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <Container className={styles.layoutContainer} maxWidth={"xl"}>
      <Grid container justifySelf={"center"}>
        <Header />
        <Grid>
          <ProductList />
        </Grid>
        <Grid>Footer</Grid>
      </Grid>
    </Container>
  );
};
