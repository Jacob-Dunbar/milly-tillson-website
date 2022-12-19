import styled from "styled-components";

interface Props {
  showMobMenu: boolean;
}

export const StyledMobileMenu = styled.div<Props>`
  display: none;

  background-color: yellow;

  @media (max-width: 420px) {
    display: block;

    ul {
      background-color: blue;
      display: block;
      pointer-events: ${(props) =>
        props.showMobMenu ? " visible-painted" : "none"};
      transition: all 300ms ease;

      position: fixed;

      opacity: ${(props) => (props.showMobMenu ? 1 : 0)};
      bottom: ${(props) => (props.showMobMenu ? 0 : "-100%")};
      left: 0;
      z-index: 100;
      height: 80vh;
      width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: #cfcfcf;

      gap: 2rem;
      font-size: 1.25rem;

      color: black;

      .close {
        display: block;
        position: absolute;
        width: 1.75rem;
        height: 1.75rem;
        top: 15px;
        right: 15px;
      }
    }
  }
`;
