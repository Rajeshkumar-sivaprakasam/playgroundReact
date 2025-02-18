import Dashboard from "@pages/dashboard";
import Profile from "@pages/dashboard/profile";
import Home from "@pages/home";
import React from "react";
import { Route, Routes } from "react-router-dom";

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default RouterComponent;
