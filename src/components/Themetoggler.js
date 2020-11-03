import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import moonBlack from "../img/moonBlack.png";
import moonWhite from "../img/moonWhite.png";
const styling = {
  cursor: "pointer",
  height: "21px",
  width: "20px",
  margin: "10px",
};

function Themetoggler(props) {
  // v1
  //   const context = useContext(ThemeContext);

  //v2 also posible
  const [theme, setTheme] = useContext(ThemeContext);

  const isDark = theme === "dark" ? true : false;
  const toggleThemeHandler = () => {
    //   v1
    // const reverseTheme = context[0] === "dark" ? "light" : "dark";
    // context[1](reverseTheme);
    // v2
    const reverseThemeV2 = theme === "dark" ? "light" : "dark";
    setTheme(reverseThemeV2);
  };
  return (
    // <button onClick={toggleThemeHandler} style={styling}>
    //   {props.children}
    // </button>
    <div>
      {isDark ? (
        <img
          onClick={toggleThemeHandler}
          style={styling}
          src={moonBlack}
          alt=""
        />
      ) : (
        <img
          onClick={toggleThemeHandler}
          style={styling}
          src={moonWhite}
          alt=""
        />
      )}
    </div>
  );
}

export default Themetoggler;
