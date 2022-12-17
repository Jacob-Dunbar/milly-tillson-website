import styled from "styled-components";

export const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p:nth-child(1) {
    margin-top: 20vh;
    width: 550px;
    text-align: center;
    line-height: 2.5rem;
  }
  p:nth-child(2) {
    margin-top: 5rem;
    width: 400px;
    text-align: center;
    line-height: 2.5rem;
    font-size: 0.8rem;
  }
`;
