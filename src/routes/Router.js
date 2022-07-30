import React from "react";
import TodoList from "../components/main/TodoList";
import Detail from "../components/detail/Detail";
import styled from "styled-components";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function Router() {
  return (
    <div className="style-app">
      <Routes>
        <Route path="/" element={<TodoList />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="*" element={<h1>없는 페이지입니다.</h1>}></Route>
      </Routes>
    </div>
  );
}

export default Router;
