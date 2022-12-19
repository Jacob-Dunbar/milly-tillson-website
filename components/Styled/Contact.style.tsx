import styled from "styled-components";

export const StyledContact = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1.5rem;
    margin-top: 6rem;
    margin-bottom: 3rem;
  }

  p {
    text-transform: lowercase;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 420px) {
    height: 80vh;
  }
`;
