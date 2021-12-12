import styled from "styled-components";
import PhoneBg from "../../../images/VideosSection/mobile.png";

export const Container = styled.div`
  position: relative;

  @media screen and (max-width: 920px) {
    margin-top: 6rem;
  }
`;

export const TextAreaShadow = styled.div`
  position: absolute;
  width: 12.125rem;
  height: 3.625rem;
  top: 30px;
  right: -20px;
  border: 2px solid black;
  z-index: 1;
  border-radius: 100px 100px 100px 0px;
`;

export const TextArea = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  font-family: "Euclid Circular A";
  justify-content: center;
  top: 40px;
  right: -14px;
  border-radius: 100px 100px 100px 0px;
  background-color: white;
  width: 12.125rem;
  height: 3.625rem;

  p {
    font-family: "Euclid Circular A";
    font-size: 1.5rem;
  }
`;

export const StarShadow = styled.div`
  position: absolute;
  top: 95px;
  left: -75px;
  width: 3.75rem;
  height: 3.75rem;
  border: 1px solid black;
  background-color: white;
  z-index: -1;
  border-radius: 100px 100px 0 100px;
`;

export const Star = styled.div`
  position: absolute;
  display: flex;
  top: 100px;
  left: -70px;
  width: 3.75rem;
  height: 3.75rem;
  background-color: black;
  z-index: -1;
  border-radius: 100px 100px 0 100px;

  .star__icon {
    width: 2.375rem;
    height: 2.375rem;
    z-index: 1;
    color: white;
    margin: auto;
  }
`;

export const PhoneShadow = styled.div`
  width: 15.5rem;
  height: 30.25rem;
  position: absolute;
  border: 2px solid black;
  border-radius: 1rem;
  top: -20px;
  left: -25px;
  z-index: -1;
`;

export const Phone = styled.div`
  background-image: url(${PhoneBg});
  display: flex;
  width: 15.5rem;
  height: 31.25rem;
  background-repeat: no-repeat;
  background-size: 100%;
  align-items: center;
  justify-content: center;

  .play {
    width: 3.625rem;
    height: 3.625rem;
    background-color: white;
    border-radius: 3.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &__icon {
      display: block;
      margin: auto auto;
      color: #5b44f3;
      width: 1.75rem;
      height: 1.75rem;
    }
  }
`;

export const AnswerArea = styled.div`
  position: absolute;
  bottom: 30px;
  font-family: DM Sans;

  .answer {
    color: white;
    margin-bottom: 1rem;
  }

  .answers {
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      width: 3.875rem;
      height: 3.875rem;
      background-color: white;
      border-radius: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      p {
        text-align: center;
        font-size: 0.625rem;
        color: #5b44f3;
        margin-bottom: 0.25rem;
      }
    }
    &__icon {
      margin-bottom: 1rem;
      margin-left: auto;
      margin-right: auto;
      color: #5b44f3;
    }
  }

  .videoven {
    background: rgba(94, 94, 94, 0.5);
    border-radius: 0px 0px 20px 20px;
    &__text {
      color: white;
      margin-top: 1rem;
      font-size: 0.85rem;
      text-align: center;
    }
  }
`;
