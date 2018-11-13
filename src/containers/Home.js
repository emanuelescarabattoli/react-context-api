import React, { Component } from "react";

import ThemeContext from "../context/ThemeContext";

import Header from "../components/Header";
import Card from "../components/Card";
import Page from "../components/Page";

class Home extends Component {
  render() {
    return (
      <Page>
        <Header title="React Context API" />
        <div className="grid">
          <Card title={"Pippo"}>a</Card>
          <Card title={"Pippo"}>a</Card>
          <Card title={"Pippo"}>a</Card>
        </div>
      </Page>
    );
  }
}

export default Home;
