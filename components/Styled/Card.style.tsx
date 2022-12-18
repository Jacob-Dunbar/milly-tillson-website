import styled from "styled-components";

export const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 600ms ease;

  .image {
    object-fit: cover;
  }

  h2 {
    position: absolute;
    bottom: -1.25rem;
    right: 1rem;
    width: 100%;
    color: black;
    font-size: 2.5rem;

    text-align: end;

    display: flex;
    justify-content: end;
    align-items: center;

    > * {
      width: 2rem;
      margin-left: 1rem;
      padding-top: 0.2rem;
      transition: all 600ms ease;
      opacity: 0;
      margin-right: -2rem;
    }
  }

  &:hover {
    transform: scale(1.05);

    h2 > * {
      opacity: 1;
      margin-right: 3rem;
    }
  }

  @media (max-width: 420px) {
    transition: none;

    h2 {
      right: 0;
      font-size: 2rem;

      > * {
        transition: none;
      }
    }
    &:hover {
      transform: none;

      h2 > * {
        opacity: 0;
        margin-right: -2rem;
      }
    }
  }
`;
