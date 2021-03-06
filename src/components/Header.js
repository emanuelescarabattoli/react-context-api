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
                <li>
                  <a href="#" onClick={() => this.props.toggleTheme()}>
                    Toggle
                  </a>
                </li>
              </ul>
            </header>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Header;
