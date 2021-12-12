import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Euclid Circular A";
  padding: 1rem 0;
`;

export const Brand = styled.div`
  h1 {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const NavItems = styled.div`
  display: flex;
  p {
    margin: 0 0.4rem;
    cursor: pointer;
    /* font-size: 0.75rem; */
    font-size: 1rem;
    color: #adadad;
  }
  @media screen and (max-width: 920px) {
    display: none;
  }
`;

export const Buttons = styled.div`
  button {
    font-family: "Euclid Circular A";
    border: none;
    padding: 0.625rem 1.25rem;
    margin: 0 0.4rem;
    cursor: pointer;
    font-size: 14px;
  }

  button:first-child {
    color: black;
    background-color: white;
    border: 1px solid black;
  }
  button:last-child {
    color: white;
    background-color: black;
    border: 1px solid black;
  }
  @media screen and (max-width: 920px) {
    display: none;
  }
`;

export const Hamburger = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  @media screen and (min-width: 920px) {
    display: none;
  }
`;
