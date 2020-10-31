import React, { Component } from "react";
import ThemeContext from "../../context/ThemeContext";

const darkPriorityStyle = {
  //*
  backgroundColor: "#141321",
  color: "#1774ff",
  border: "none",
};
const whitePriorityStyle = {
  //*
  backgroundColor: "white",
  color: "#1774ff",
  border: "none",
};

export class Priority extends Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
  }
  render() {
    const isDark = this.context[0] === "dark" ? true : false;
    console.log(this.context);
    return (
      <select
        name="priority"
        id=""
        defaultValue={"DEFAULT"}
        onChange={this.props.onChangePriority}
        style={
          this.context[0] === "dark" ? darkPriorityStyle : whitePriorityStyle
        }
      >
        <option disabled value="DEFAULT">
          select priority
        </option>

        <option value="high"> {isDark ? "Hurry up, moron" : "high"}</option>
        <option value="middle">middle</option>
        <option value="low">{isDark ? "low as hell" : "low"}</option>
      </select>
    );
  }
}

export default Priority;
