import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <Container
      className={styles.layoutContainer}
      maxWidth={false}
      disableGutters
    >
      <Header />
      <Container maxWidth={"xl"}>
        <Outlet />
      </Container>
      <Footer />
    </Container>
  );
};
