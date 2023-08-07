import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

export const Footer = () => {
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{ backgroundColor: "#ff3d3b" }}
    >
      <Container fixed>
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © 2023 Тестове завдання. Виконав Арбаков Максим.
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
