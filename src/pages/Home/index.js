import React, { Component } from "react";

import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Form from "../../components/Form";

export default class Home extends Component {
  state = {};

  render() {
    return (
      <>
        <Navbar />
        <Header />
        <Form />
      </>
    );
  }
}
