import React, { Component } from "react";

import ThemeContext from "./context/ThemeContext";

import Home from "./containers/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light"
    };
  }

  toggleTheme() {
    this.setState(() => this.state.theme === "light" ? { theme: "dark" } : { theme: "light" });
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Home toggleTheme={() => this.toggleTheme()}/>
      </ThemeContext.Provider>
    );
  }
}

export default App;
