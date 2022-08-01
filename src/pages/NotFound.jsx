import React, { useState } from "react";
import Header from "../components/ui/Header";
import Form from "../components/home/Form";
import Layout from "../components/ui/Layout";
import List from "../components/home/List";
import { useSelector, useDispatch } from "react-redux";

function NotFound() {
  return (
    <Layout>
      <Header />
      <Form />
      <h2>없는 페이지 입니다.</h2>
    </Layout>
  );
}

export default NotFound;
