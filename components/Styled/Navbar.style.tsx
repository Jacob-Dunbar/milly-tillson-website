import styled from "styled-components";

export const StyledNavbar = styled.nav`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 4rem;
    color: black;
    cursor: pointer;

    &:hover {
      color: #ce8b8a;
    }
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 2rem;
    font-size: 1.25rem;

    color: black;

    > *:hover {
      color: #ce8b8a;
      cursor: pointer;
    }

    .icon {
      display: flex;
      align-items: center;
    }
  }
`;
