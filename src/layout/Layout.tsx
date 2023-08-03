import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";

const Layout = () => {
  return (
    <Suspense fallback={null}>
      <Header />
      <Outlet />
    </Suspense>
  );
};

export default Layout;
