import { NavLink } from "react-router-dom";
import {
  AppBar,
  Grid,
  Container,
  Typography,
  Toolbar,
  Box,
} from "@mui/material";
import { routConfig } from "../../../routes/AppRoutes";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <Grid className={styles.headerRow}>
      <AppBar>
        <Container maxWidth={false}>
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Box>
              <Typography
                variant="h3"
                noWrap
                component="a"
                className={styles.logo}
              >
                <NavLink
                  style={{ color: "#fff", textDecoration: "blink" }}
                  to={"/"}
                >
                  SA
                </NavLink>
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 0, display: "flex" }}>
              {routConfig?.map((item) => {
                if (item.name !== null) {
                  return (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className={styles.link}
                    >
                      {item.name}
                    </NavLink>
                  );
                }
              })}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Grid>
  );
};
