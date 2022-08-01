import React, { useState } from "react";
import Header from "../components/ui/Header";
import Form from "../components/home/Form";
import Layout from "../components/ui/Layout";
import List from "../components/home/List";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  );
}

export default Home;
