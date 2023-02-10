import { About } from "pages/AboutPage";
import { Main } from "pages/MainPage";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            element={<div className="page-wrapper">{element}</div>}
            path={path}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
