import styled from "styled-components";

export const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

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
  }
`;
