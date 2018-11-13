import React, { Component } from "react";

import ThemeContext from "../context/ThemeContext";

class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          return (
            <header className={`header ${value}`}>
              <span>{this.props.title}</span>
              <ul>
                <li>Home</li>
                <li>Pippo</li>
                <li>Pluto</li>
              </ul>
            </header>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Header;
