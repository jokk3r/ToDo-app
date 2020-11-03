import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.scss";
import listWhite from "../../img/listWhite.png";
import listBlack from "../../img/listBlack.png";
import logoBlack from "../../img/logoBlack.png";
import logoWhite from "../../img/logoWhite.png";
import check from "../../img/check.png";

import ThemeContext from "../../context/ThemeContext";
import Themetoggler from "../Themetoggler";

const Nav = () => {
  const context = useContext(ThemeContext);

  const isDark = context[0] === "dark" ? true : false;

  return (
    <nav className={isDark ? style.nav : style.nav__dark}>
      <NavLink exact to="/">
        <div className={style.nav__logo}>
          <img
            src={isDark ? logoBlack : logoWhite}
            className={(style.img__main, style.img__logo)}
            alt=""
          />
          <img
            src={check}
            alt=""
            className={(style.img__main, style.img__check)}
            alt=""
          />
          <img
            src={isDark ? listBlack : listWhite}
            className={(style.img__main, style.img__list)}
            alt=""
          />
        </div>
      </NavLink>
      {/* <ul className={style.nav__list}>
        <NavLink exact to="/" activeClassName={style.activeLink}></NavLink>
        <NavLink to="/help" activeClassName={style.activeLink}>
        <li>Help</li>
        </NavLink>
      </ul> */}
      <div className={style.nav__right}>
        <NavLink to="/help" activeClassName={style.activeLink}>
          <p className={isDark ? style.info__black : style.info__white}>Info</p>
        </NavLink>

        <Themetoggler />
      </div>
    </nav>
  );
};

export default Nav;
