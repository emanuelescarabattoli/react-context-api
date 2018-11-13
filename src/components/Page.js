import React, { Component } from "react";

import ThemeContext from "../context/ThemeContext";

class Page extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          return (
            <div className={`main ${value}`}>
              {this.props.children}
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Page;
