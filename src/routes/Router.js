import React from "react";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import NotFound from "../pages/NotFound";
import styled from "styled-components";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function Router() {
  return (
    <div className="style-app">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default Router;
