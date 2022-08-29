import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Views/LandingPage";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
