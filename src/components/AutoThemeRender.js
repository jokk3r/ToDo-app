// import React, { useEffect, useContext, useState } from "react";
// import ThemeContext from "../context/ThemeContext";

// let intervalRunning = false;
// function AutoThemeRender(props) {
//   const [time, setTime] = useState(1000);
//   const context = useContext(ThemeContext);
//   let intervalTheme = null;
//   const autoToggleThemeHandler = () => {
//     if (!intervalRunning) {
//       intervalRunning = true;
//       intervalTheme = setInterval(() => {
//         toggleThemeHandler();
//       }, time);
//     } else {
//       clearInterval(intervalTheme);
//       debugger;
//       intervalRunning = false;
//     }
//     // return () => clearInterval(begin);
//   };
//   useEffect(() => {}, []);
//   const toggleThemeHandler = () => {
//     const reverseTheme = context[0] === "dark" ? "light" : "dark";
//     context[1](reverseTheme);
//   };
//   return <button onClick={autoToggleThemeHandler}>{props.children}</button>;
// }

// export default AutoThemeRender;
