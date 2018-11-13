import React, { Component } from "react";

import ThemeContext from "./context/ThemeContext";

import Home from "./containers/Home";

class App extends Component {
  render() {
    return (
      <ThemeContext.Provider value="light">
        <Home />
      </ThemeContext.Provider>
    );
  }
}

export default App;
