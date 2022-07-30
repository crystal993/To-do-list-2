import React, { useState } from "react";
import Header from "../ui/Header";
import Form from "./Form";
import Layout from "../ui/Layout";
import List from "./List";
import { useSelector, useDispatch } from "react-redux";

function TodoList() {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  );
}

export default TodoList;
