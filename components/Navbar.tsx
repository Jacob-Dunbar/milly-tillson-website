import Link from "next/link";
import css from "../styles/Navbar.module.scss";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { StyledNavbar } from "./Styled/Navbar.style";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link href="/">
        <h1>Milly Tillson</h1>
      </Link>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/">
          <li>About</li>
        </Link>
        <Link href="/">
          <li>Contact</li>
        </Link>
        <Link className="icon" href="/">
          <AiFillInstagram />
        </Link>
        <Link className="icon" href="/">
          <AiFillLinkedin />
        </Link>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
