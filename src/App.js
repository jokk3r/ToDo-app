import React, { useState, useContext } from "react";
import TodoContainer from "./components/TodoContainer";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Help from "./components/help/Help";
import Nav from "./components/nav/Nav";
import Contact from "./components/contact/Contact";
import ConcretItem from "./components/TodoItem/description/ConcretItem";
import ThemeContext from "./context/ThemeContext";
// import Themetoggler from "./components/Themetoggler";
import AutoThemeRender from "./components/AutoThemeRender";

function App() {
  const themeStateHook = useState("dark");
  const context = useContext(ThemeContext);

  const isDark = context[0] === "dark" ? true : false;

  return (
    <Router>
      <ThemeContext.Provider value={themeStateHook}>
        <div className={isDark ? "App__dark" : "App"}>
          <Nav />
          {/* <Themetoggler>Toggle Theme!</Themetoggler> */}

          <Switch>
            <Route path="/" exact component={TodoContainer} />
            <Route path="/help" exact component={Help} />

            <Route path="/todo/:id" exact component={ConcretItem} />
          </Switch>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
