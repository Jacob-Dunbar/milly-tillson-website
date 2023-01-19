import styled from "styled-components";

interface Props {
  showMobMenu: boolean;
}

export const StyledNavbar = styled.nav<Props>`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;

  .toggle {
    display: none;
  }

  h1 {
    font-size: 4rem;
    color: black;
    cursor: pointer;

    &:hover {
      color: #ce8b8a;
    }
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;

    font-size: 0.9rem;

    color: black;

    li {
      margin-left: 1rem;
    }

    > *:hover {
      color: #ce8b8a;
      cursor: pointer;
    }

    .icon {
      display: flex;
      align-items: center;

      margin-left: 1rem;
    }
  }

  @media (max-width: 420px) {
    width: 100vw;
    height: 20vh;
    overflow-x: hidden;

    .desk {
      display: none;
    }

    h1 {
      font-size: 2.5rem;
      width: 60%;
    }

    .toggle {
      display: block;
      width: 1.75;
      height: 1.75rem;
      transition: 300ms all ease;
      opacity: ${(props) => (props.showMobMenu ? 0 : 1)};
    }
  }
`;
