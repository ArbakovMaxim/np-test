import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Suspense fallback={null}>
      <Box
        component="div"
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Box>
    </Suspense>
  );
};

export default Layout;
