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
  width: "100%",
};

export class Priority extends Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
  }
  render() {
    const isDark = this.context[0] === "dark" ? true : false;

    return (
      <select
        name="priority"
        id=""
        defaultValue={"DEFAULT"}
        onChange={this.props.onChangePriority}
        style={
          this.context[0] === "dark" ? whitePriorityStyle : darkPriorityStyle
        }
      >
        {/* <option disabled value="DEFAULT">
          select priority
        </option> */}

        <option value="normal">Normal</option>
        <option value="high"> {isDark ? "High" : "Hurry up"}</option>
        <option value="low">{isDark ? "Low" : "Leisurely"}</option>
      </select>
    );
  }
}

export default Priority;
