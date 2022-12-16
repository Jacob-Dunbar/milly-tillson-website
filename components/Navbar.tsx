import React from "react";
import css from "../styles/Navbar.module.scss";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className={css.navbar}>
      <h1 className={css.navbar__heading}>Milly Tillson</h1>
      <ul className={css.navbar__menu}>
        <li className={css.navbar__link}>Home</li>
        <li className={css.navbar__link}>About</li>
        <li className={css.navbar__link}>Contact</li>
        <AiFillInstagram />
        <AiFillLinkedin />
      </ul>
    </div>
  );
};

export default Navbar;
