import React, { Component } from "react";

import ThemeContext from "../context/ThemeContext";

class Card extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          return (
            <div className={`card ${value}`}>
              <h4>{this.props.title}</h4>
              {this.props.children}
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Card;
