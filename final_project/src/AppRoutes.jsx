import React from "react";
import { Routes, Route } from "react-router-dom";
import appRoutes from "./config/routes";

const AppRoutes = () => {
  return (
    <Routes>
      {appRoutes.map((route, index) => {
        if (route.Guard) {
          return (
            <Route
              key={index}
              path={route.path}
              element={
                // <route.Guard>
                  <route.component />
                // </route.Guard>
              }
            />
          );
        }
        return (
          <Route key={index} path={route.path} element={<route.component />} />
        );
      })}
      ;
    </Routes>
  );
};

export default AppRoutes;
