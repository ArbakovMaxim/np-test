import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink, useLocation } from "react-router-dom";

const styles = {
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
};

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const location = useLocation();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    handleClose();
  }, [location.pathname]);

  return (
    <Box component="section" sx={{ backgroundColor: "#ff3d3b" }}>
      <Container fixed>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            sx={{ backgroundColor: "#ff3d3b", boxShadow: 0 }}
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem>
                  <NavLink onClick={handleClose} to="/" style={styles}>
                    Посилки
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink
                    onClick={handleClose}
                    to="/ListBranches"
                    style={styles}
                  >
                    Відділення
                  </NavLink>
                </MenuItem>
              </Menu>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <NavLink to="/" style={styles}>
                  Де посилка
                </NavLink>
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
    </Box>
  );
};
