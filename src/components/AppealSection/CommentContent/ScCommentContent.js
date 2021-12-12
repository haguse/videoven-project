import styled from "styled-components";
import ArrowBg from "../../../images/AppealSection/Bakgrounds/Arrow.svg";

export const CommentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;

  .label {
    margin: 0 0 8rem 4rem;
    display: flex;

    @media (max-width: 920px) {
      margin: 0 0 2rem 4rem;
    }

    p {
      font-family: Nunito, monospace;
      font-size: 2.25rem;
      font-weight: bold;
      @media (max-width: 920px) {
        margin-top: -1.5rem;
        font-size: 1.75rem;
        margin-left: -60px;
      }
    }
  }
`;

export const Comment = styled.div`
  font-family: Nunito, monospace;

  .arrow-bg {
    background-image: url(${ArrowBg});
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: -30px;
    z-index: -100;

    @media (max-width: 920px) {
      display: none;
    }
  }

  padding: 2.5rem;

  @media (max-width: 920px) {
    padding: 1rem;
    margin-bottom: 1rem;
  }
  background-color: white;
  box-shadow: 0px 8px 20px rgba(204, 204, 204, 0.25);
  max-width: 30rem !important;
  align-self: flex-end;
  border-radius: 10px;

  .outer {
    position: relative;
    margin: 1.125rem;
    padding: 1rem 0;
  }

  .outer:before,
  .outer:after {
    content: "";
    position: absolute;
    height: 30%;
    width: 12%;
  }

  .outer:before {
    border-left: 3px solid #ffcb13;
    border-top: 3px solid #ffcb13;
    border-radius: 0.1rem;
    top: -1.125rem;
    left: -1.125rem;
  }

  .inner:after {
    border-right: 3px solid #ffcb13;
    border-bottom: 3px solid #ffcb13;
    border-radius: 0.1rem;
    bottom: -1.125rem;
    right: -1.125rem;
  }

  .author {
    color: #333333;
    font-size: 0.875rem;
  }
  .comment {
    font-size: 1.125rem;
    color: #5b44f3;
    margin-top: 1rem;
  }
`;
