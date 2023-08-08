import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AssignmentIcon from "@mui/icons-material/Assignment";

const styles = {
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
  padding: "0",
};

export const Header = () => {
  return (
    <Box component="section" sx={{ backgroundColor: "#ff3d3b" }}>
      <Container fixed>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            sx={{ backgroundColor: "#ff3d3b", boxShadow: 0 }}
          >
            <Toolbar>
              <Button
                component={RouterLink}
                to="/"
                color="inherit"
                sx={{ padding: "0" }}
              >
                <AssignmentIcon />
              </Button>
              <Button
                component={RouterLink}
                to="/ListBranches"
                color="inherit"
                sx={{ padding: "0" }}
              >
                <LocationOnIcon />
              </Button>
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
