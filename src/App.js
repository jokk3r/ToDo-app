import React, { useState, useContext, useEffect } from "react";
import TodoContainer from "./components/TodoContainer";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Help from "./components/help/Help";
import Nav from "./components/nav/Nav";
import ConcretItem from "./components/TodoItem/description/ConcretItem";
import ThemeContext from "./context/ThemeContext";

function App() {
  const themeStateHook = useState("dark");

  return (
    <Router>
      <ThemeContext.Provider value={themeStateHook}>
        <div className="App">
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
