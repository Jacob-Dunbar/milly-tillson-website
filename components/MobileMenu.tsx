import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineClose,
} from "react-icons/ai";
import { StyledMobileMenu } from "./Styled/MobileMenu.style";

interface Props {
  showMobMenu: boolean;
  setShowMobMenu: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu: React.FC<Props> = (props) => {
  console.log(props.showMobMenu);
  return (
    <StyledMobileMenu showMobMenu={props.showMobMenu}>
      <ul>
        <AiOutlineClose
          className="close"
          onClick={() => props.setShowMobMenu(false)}
        />
        <Link href="/">
          <li onClick={() => props.setShowMobMenu(false)}>Home</li>
        </Link>
        <Link href="/about">
          <li onClick={() => props.setShowMobMenu(false)}>About</li>
        </Link>
        <Link href="/contact">
          <li onClick={() => props.setShowMobMenu(false)}>Contact</li>
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
    </StyledMobileMenu>
  );
};

export default MobileMenu;
