import Link from "next/link";
import { useState, useEffect } from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import { StyledNavbar } from "./Styled/Navbar.style";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [showMobMenu, setShowMobMenu] = useState(false);

  return (
    <StyledNavbar showMobMenu={showMobMenu}>
      <Link href="/">
        <h1>Milly Tillson</h1>
      </Link>

      <AiOutlineMenu className="toggle" onClick={() => setShowMobMenu(true)} />

      <MobileMenu showMobMenu={showMobMenu} setShowMobMenu={setShowMobMenu} />

      <ul className="desk">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
        <Link
          className="icon"
          href="https://www.instagram.com/millytillson/?hl=en"
        >
          <AiFillInstagram />
        </Link>
        <Link
          className="icon"
          href="https://www.linkedin.com/in/milly-tillson/?originalSubdomain=de"
        >
          <AiFillLinkedin />
        </Link>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
