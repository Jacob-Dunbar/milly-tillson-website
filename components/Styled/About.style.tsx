import styled from "styled-components";

export const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding-bottom: 25vh;

  p:nth-child(1) {
    font-size: 1rem;
    margin-top: 20vh;
    width: 620px;
    text-align: center;
    line-height: 2.5rem;
  }
  p:nth-child(2) {
    margin-top: 5rem;
    width: 500px;
    text-align: center;
    line-height: 2.5rem;
    font-size: 0.8rem;
  }

  @media (max-width: 420px) {
    min-height: 75vh;
    padding-bottom: 0;
    padding-top: 5vh;

    p:nth-child(1) {
      font-size: 0.75rem;
      margin-top: 0;
      width: 80%;
      text-align: center;
      line-height: 2.5rem;
    }
    p:nth-child(2) {
      margin-top: 5rem;
      width: 300px;
      text-align: center;
      line-height: 2.5rem;
      font-size: 0.5rem;
      padding-bottom: 5rem;
    }
  }
`;
