import styled from "styled-components";

export const StyledHome = styled.section`
  display: flex;
  flex-direction: column;

  padding: 2rem 3rem;
  margin-bottom: 6rem;
  min-height: 100vh;

  div:nth-child(1) {
    width: 450px;
    height: 550px;
    margin-left: auto;
  }
  div:nth-child(2) {
    width: 500px;
    height: 500px;
    margin-right: auto;
    margin-left: 4rem;
    margin-top: -16rem;
  }

  @media (max-width: 420px) {
    padding: 2rem 0;

    div:nth-child(1) {
      width: 300px;
      height: 400px;
      margin-left: auto;
    }
    div:nth-child(2) {
      width: 100px;
      height: 100px;
      margin-left: 0;
      margin-top: 4rem;
    }
  }
`;
