import styled from "styled-components";

export const Container = styled.div`
  /* flex: 4; */
  max-width: 700px;

  @media (max-width: 1200px) {
    max-width: 600px;
  }

  @media (max-width: 992px) {
    max-width: 400px;
  }
  .outer {
    position: relative;
    margin: 1.125rem;
    padding: 2rem 0;
  }

  div:before,
  div:after {
    content: "";
    position: absolute;
    height: 6%;
    width: 6%;
  }

  .outer:before {
    border-left: 3px solid black;
    border-top: 3px solid black;
    border-radius: 0.4rem;
    top: -1.125rem;
    left: -1.125rem;
  }

  .inner:after {
    bottom: 0;
    right: 0;
    border-right: 3px solid black;
    border-bottom: 3px solid black;
    border-radius: 0.4rem;
    bottom: -1.125rem;
    right: -1.125rem;
  }

  .yellow-circle {
    display: relative;
  }

  .yellow-circle::before {
    content: "";
    display: inline-block;
    width: 3.375rem;
    height: 3.375rem;
    border-radius: 3.375rem;
    left: -70px;
    background-color: #ffcb13;
  }

  .black-circle::before {
    content: "";
    display: inline-block;
    width: 3.375rem;
    height: 3.375rem;
    border-radius: 3.375rem;
    border: 1px solid black;
    left: -78px;
    top: 105px;
  }

  .texts {
    &__first {
      font-size: 3rem;
      font-family: "Euclid Circular A";
      font-weight: bold;

      @media screen and (max-width: 768px) {
        font-size: 2rem;
      }
    }
    &__second {
      font-size: 3rem;
      color: #5b44f3;
      margin: 1.125rem 0;
      @media screen and (max-width: 768px) {
        font-size: 2rem;
      }
    }
    &__third {
      font-size: 1.125rem;
      font-family: "Nunito", sans-serif;
    }
    &__fourth {
      font-size: 1.125rem;
      margin-top: 1rem;
      font-family: "Nunito", sans-serif;
    }
  }
  button {
    color: white;
    padding: 0.6rem 0.8rem;
    border: none;
    border-radius: 0.2rem;
    background-color: #5b44f3;
    margin-top: 1.5rem;
    font-family: "Nunito", sans-serif;
    font-size: 1.125rem;
    font-weight: bold;
    cursor: pointer;
  }
`;
