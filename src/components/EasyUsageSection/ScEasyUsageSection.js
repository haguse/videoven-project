import styled from "styled-components";
import ContentBg from "../../images/EasyUsageSection/Backgrounds/Container.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  @media screen and (min-width: 920px) {
    justify-content: space-between;
  }
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  .easy-usage {
    &__title {
      font-family: "Euclid Circular A";
      font-size: 2.25rem;
      text-align: center;
    }
    &__description {
      font-size: 1.125rem;
      margin-top: 1rem;
      line-height: 1.125rem;
      font-family: "Euclid Circular A";
      font-family: Nunito, monospace;
      @media screen and (max-width: 920px) {
        margin-left: 0.2rem;
      }
    }
    @media screen and (max-width: 920px) {
      margin-top: 2rem;
    }
    @media screen and (min-height: 1000px) {
      margin-top: 3rem;
    }
  }

  .content {
    margin-top: 2rem;
    position: relative;
    padding: 3rem 3rem;

    &__timer {
      @media (max-width: 920px) {
        display: none;
      }
      display: flex;
      position: absolute;
      border: 1px solid black;
      border-radius: 0.4rem;
      padding: 0.3rem 0.6rem;
      right: 32%;
      top: -1.4%;

      &__text {
        background-color: white;
      }
    }

    @media (max-width: 1010px) {
      background: none;
      padding: 0;
    }

    &__videovenui {
      @media (max-width: 920px) {
        display: none;
      }
    }

    background-image: url(${ContentBg});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;

    &__woman {
      position: absolute;
      top: 10%;
      left: 21.1%;

      @media screen and (max-width: 1010px) {
        top: 10%;
        left: 17.8%;
      }

      @media screen and (max-width: 920px) {
        position: static;
      }

      img {
        @media screen and (max-width: 500px) {
          width: 80%;
          display: flex;
          margin: 0 auto;
        }
      }
    }

    .star {
      width: 40px;
      height: 40px;
      z-index: 1;
      @media (max-width: 920px) {
        display: none;
      }
    }

    .starshadow {
      width: 40px;
      height: 40px;
      color: #dedede;
      z-index: -1;
      @media (max-width: 920px) {
        display: none;
      }
    }

    .star1 {
      position: absolute;
      right: 10px;
      bottom: 15px;
    }
    .star1shadow {
      position: absolute;
      right: 5px;
      bottom: 10px;
    }
    .star2 {
      position: absolute;
      right: 5px;
      bottom: -20px;
    }
    .star2shadow {
      position: absolute;
      right: 0;
      bottom: -25px;
    }
    .star3 {
      position: absolute;
      right: 50px;
      bottom: 0;
    }
    .star3shadow {
      position: absolute;
      right: 45px;
      bottom: -5px;
    }
  }
`;

export const Play = styled.div`
  @media (max-width: 920px) {
    display: none;
  }
  div {
    width: 3.75rem;
    height: 3.75rem;
    border: 1px solid black;
    border-radius: 3.75rem;
    position: absolute;
    top: -10%;
  }

  .play {
    width: 2rem;
    height: 2rem;
    position: absolute;
  }

  .play1 {
    top: 22%;
    left: 25%;
  }
  .play2 {
    top: 22%;
    left: 39%;
  }
`;
