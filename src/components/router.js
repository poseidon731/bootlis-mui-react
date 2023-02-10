import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../App';
import Login from '../pages/login';

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default Router;