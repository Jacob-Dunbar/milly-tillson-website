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

  & > * {
    height: 65vh;
    width: auto;

    position: relative;

    &:first-child {
      margin-left: 400px;
    }

    .image {
      object-fit: cover;
    }
  }
  @media (max-width: 420px) {
    flex-direction: column;
    height: 100%;
    margin-bottom: 5vh;
    margin-top: 110px;

    overflow-y: visible;

    & > * {
      height: auto;
      width: 100%;

      &:first-child {
        margin-left: 0px;
      }
    }
  }
`;
