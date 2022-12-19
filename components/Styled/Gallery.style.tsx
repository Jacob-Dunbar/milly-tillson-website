import styled from "styled-components";

export const StyledGallery = styled.section`
  overflow-x: hidden;
  overflow-y: visible;
  position: relative;
  height: 80vh;

  h1 {
    font-size: 3rem;
    position: absolute;
    z-index: 50;
    top: 66vh;
    right: 80px;
  }

  @media (max-width: 420px) {
    min-height: 100vh;
    height: 100%;
    padding: 0 1rem;
    overflow-y: visible;

    h1 {
      font-size: 1.5rem;
      position: absolute;
      z-index: 50;
      top: 96px;
      right: 5%;
      width: 75%;
      text-align: right;
    }
  }
`;
