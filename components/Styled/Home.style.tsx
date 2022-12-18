import styled from "styled-components";

export const StyledHome = styled.section`
  display: flex;
  flex-direction: column;

  padding: 2rem 3rem;
  margin-bottom: 6rem;
  min-height: 100vh;

  div:nth-child(1) {
    margin-left: auto;
  }

  div:nth-child(2) {
    margin-top: -10rem;
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
    margin-left: 20rem;
  }

  div:nth-child(6) {
    margin-top: 5rem;
    margin-left: auto;
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
      margin-top: 5rem;
      margin-left: auto;
    }
  }
`;
