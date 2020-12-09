import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = ({ timeToGetBusy }) => {
  const context = useContext(ThemeContext);

  const isDark = context[0] === "dark" ? true : false;
  const hStyle = {
    textAlign: "center",
    color: "#1774ff",
    fontSize: "20px",
    paddingBottom: "7px",
  };
  return <>{timeToGetBusy ? <h2 style={hStyle}>Time to get busy</h2> : null}</>;
};

export default Header;
