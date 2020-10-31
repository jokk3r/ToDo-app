import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import sun from "./../img/sun_102839.png";
import luna from "./../img/-night-scenery_89739.png";
const styling = {
  cursor: "pointer",
  width: "45px",
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
        <img onClick={toggleThemeHandler} style={styling} src={sun} alt="" />
      ) : (
        <img onClick={toggleThemeHandler} style={styling} src={luna} alt="" />
      )}
    </div>
  );
}

export default Themetoggler;
