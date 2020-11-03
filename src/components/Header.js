import React, { useContext } from "react";
import imgTodo from "../img/farbeBild.jpg";
import imgTodoDark from "../img/darkBild.jpg";
import ThemeContext from "../context/ThemeContext";

const Header = ({ timeToGetBusy }) => {
  const context = useContext(ThemeContext);

  const isDark = context[0] === "dark" ? true : false;
  const hStyle = {
    textAlign: "center",
    color: "#1774ff",
    fontSize: "20px",
  };
  return <>{timeToGetBusy ? <h2 style={hStyle}>Time to get busy</h2> : null}</>;
};

export default Header;
