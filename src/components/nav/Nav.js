import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.scss";
import logo from "../../img/checklist_106575.png";
import blacklogo from "../../img/darkLogo.png";
import ThemeContext from "../../context/ThemeContext";
import Themetoggler from "../Themetoggler";

const Nav = () => {
  const context = useContext(ThemeContext);

  const isDark = context[0] === "dark" ? true : false;

  return (
    <nav className={style.nav}>
      <NavLink exact to="/">
        <div className={style.nav__logo}>
          <img src={isDark ? blacklogo : logo} alt="" />
        </div>
      </NavLink>
      <ul className={style.nav__list}>
        <NavLink exact to="/" activeClassName={style.activeLink}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/help" activeClassName={style.activeLink}>
          <li>Help</li>
        </NavLink>
        <NavLink to="/contact" activeClassName={style.activeLink}>
          <li>Contact</li>
        </NavLink>
      </ul>
      <Themetoggler />
    </nav>
  );
};

export default Nav;
