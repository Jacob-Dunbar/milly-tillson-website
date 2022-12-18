import styled from "styled-components";

export const StyledCarousel = styled.div`
  margin-top: 5vh;
  position: relative;
  display: flex;

  gap: 1rem;
  margin-left: auto;
  width: 100%;

  overflow-x: scroll;
  overflow-y: visible;

  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */

  &::-webkit-scrollbar {
    display: none;
  }

  & > div {
    height: 65vh;
    aspect-ratio: 10 / 12;

    position: relative;

    &:first-child {
      margin-left: 500px;
    }

    .image {
      object-fit: cover;
    }
  }
  @media (max-width: 420px) {
    background-color: aqua;
    flex-direction: column;
    height: 100%;

    overflow-y: visible;

    & > div {
      height: unset;
      width: 100%;

      position: relative;

      &:first-child {
        margin-left: 0;
      }
    }
  }
`;
