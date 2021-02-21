import React, { Component } from "react";

import { Link as NavLink } from "react-router-dom";

import "./Button.css";

class Button extends Component {
  render() {
    const {
      type = "",
      to,
      children,
      className = "",
      style = "",
      ...otherProps
    } = this.props;

    if (type === "Link") {
      return (
        <NavLink to={to} style={style} className={className}>
          {children}
        </NavLink>
      );
    }

    return <button style={style}>{children}</button>;
  }
}

export default Button;
