import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../pages/router";
import Logo from "../Logo/Logo";
import s from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <Fragment>
        <nav className={s.navBarWrapper}>
          <NavLink className={s.logo} to={routes.HOME} exact>
            <Logo />
          </NavLink>
          <ul className={s.list}>
            <li className={s.listItem}>
              <NavLink activeClassName={s.active} className={s.logo} to={routes.HOME} exact>
                Home
              </NavLink>
            </li>
            <li className={s.listItem}>
              <NavLink activeClassName={s.active} to={routes.SHOP}>Shop</NavLink>
            </li>
            <li className={s.listItem}>
              <NavLink activeClassName={s.active} to={routes.REVIEWS}>Reviews</NavLink>
            </li>
          </ul>
        </nav>
    </Fragment>
  );
};


export default NavBar;
