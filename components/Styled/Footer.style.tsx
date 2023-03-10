import styled from "styled-components";

export const StyledFooter = styled.footer`
  font-size: 0.75rem;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  height: 5vh;

  @media (max-width: 420px) {
    font-size: 0.5rem;
  }
`;
