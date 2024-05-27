import styled from "styled-components";

export const StyledHome = styled.section`
  display: flex;
  flex-direction: column;

  padding: 2rem 4rem;
  margin-bottom: 6rem;
  min-height: 100vh;
  margin-inline: auto;
  max-width: 1500px;

  div:nth-child(1) {
    margin-left: auto;
    margin-right: 6rem;
  }

  div:nth-child(2) {
    margin-top: -12rem;
  }

  div:nth-child(3) {
    margin-top: -7rem;
    margin-left: auto;

    .image {
      width: 700px;
      height: auto;
    }
  }

  div:nth-child(4) {
    margin-top: 2rem;
  }

  div:nth-child(5) {
    margin-top: -15rem;
    margin-left: auto;
  }

  div:nth-child(6) {
    margin-top: -10rem;
    margin-left: 15rem;
  }

  @media (max-width: 420px) {
    padding: 2rem 0;

    div {
      margin: 0;
    }

    div:nth-child(1) {
      margin-left: auto;
    }

    div:nth-child(2) {
      margin-top: 5rem;
    }

    div:nth-child(3) {
      margin-top: 10rem;
      margin-left: auto;
    }

    div:nth-child(4) {
      margin-top: 10rem;
    }

    div:nth-child(5) {
      margin-top: 5rem;
      margin-left: 0rem;
    }

    div:nth-child(6) {
      margin-block: 5rem;
      margin-left: auto;
    }
  }
`;
