import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  display: inline-block;
  width: max-content;
  height: max-content;
  transition: all 600ms ease;
  margin: 1rem;

  .image {
    width: auto;
    max-height: 500px;
  }

  h2 {
    position: absolute;
    bottom: -1rem;
    right: 0;

    color: black;
    font-size: 1.75rem;

    text-align: end;
    transition: all 600ms ease;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  &:hover {
    transform: scale(1.05);

    h2 {
      margin-right: 3rem;
    }
  }

  @media (max-width: 420px) {
    .image {
      max-width: 80vw;
      height: auto;
    }

    h2 {
      font-size: 1.25rem;
      bottom: -0.5rem;
    }
  }
`;
