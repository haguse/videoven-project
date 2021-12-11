import styled from "styled-components";
import ScreenBg from "../../../images/AppealSection/screen.png";

export const ScreenShadow = styled.div`
  position: absolute;
  left: -10px;
  top: -10px;
  width: 12rem;
  height: 22.625rem;
  background-color: #e9e9e9;
  border-radius: 1rem;
  z-index: -1;
`;

export const Screen = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 17rem;
  height: 28.625rem;
  background-image: url(${ScreenBg});
  background-repeat: no-repeat;
  background-size: contain;

  .time {
    background-color: white;
    height: 1rem;
    padding: 0.2rem 0.4rem;
    border-radius: 0.4rem;
    margin: 2rem auto 0 auto;
    p {
      font-size: 0.75rem;
    }
  }

  .play {
    background: rgba(255, 255, 255, 0.7);
    width: 2.5rem;
    height: 2.5rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 0.8rem;
    margin: auto 0;
    display: flex;
    &__icon {
      color: #6204ac;
      width: 2.125rem;
      height: 2.125rem;
      margin: auto;
    }
  }
`;

export const AnswerArea = styled.div`
  font-family: DM Sans;

  .answer {
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 0.3rem;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding: 0.6rem;

    p {
      text-align: center;
      font-size: 0.8rem;
      color: #6204ac;
    }
  }

  .answers {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7rem;

    div {
      width: 3.375rem;
      height: 3.375rem;
      margin-right: 0.4rem;
      margin-left: 0.4rem;
      margin-top: 0.6rem;
      background: rgba(255, 255, 255, 0.7);
      box-shadow: 0px 4px 10px rgba(98, 4, 172, 0.25);
      border-radius: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      p {
        text-align: center;
        font-size: 0.625rem;
        color: #5b44f3;
        margin-bottom: 0.3rem;
      }
    }
    &__icon {
      margin-bottom: 0.8rem;
      margin-left: auto;
      margin-right: auto;
      color: #5b44f3;
    }
  }

  .videoven {
    background: transparent;
    position: absolute;
    bottom: 70px;
    /* right: 10px; */
    left: 32px;
    &__text {
      color: #5e6dba;
      margin-top: 1rem;
      font-size: 0.7rem;
      text-align: center;
    }
  }
`;
