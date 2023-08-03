import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./pages/Home"));
const ListBranches = lazy(() => import("./pages/ListBranches/ListBranches"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));

const App = () => {
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/colorHtml" element={<ListBranches />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
