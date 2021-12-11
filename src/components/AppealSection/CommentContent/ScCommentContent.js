import styled from "styled-components";
import Arrow from "../../../images/AppealSection/Bakgrounds/AppealBg.svg";

export const CommentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;

  .label {
    margin: 0 0 8rem 4rem;
    p {
      font-size: 2.25rem;
      font-weight: bold;
    }
  }
`;

export const Comment = styled.div`
  padding: 2.5rem;
  background-color: white;
  box-shadow: 0px 8px 20px rgba(204, 204, 204, 0.25);
  max-width: 30rem !important;
  align-self: flex-end;
  border-radius: 10px;

  background-image: url(${Arrow});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;

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
