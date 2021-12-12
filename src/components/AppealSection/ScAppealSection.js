import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  @media screen and (min-width: 920px) {
    margin-top: 10rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .peoples {
    position: absolute;

    @media screen and (max-width: 920px) {
      display: none;
    }

    img {
      position: absolute;
    }
    img:first-child {
      top: -120px;
      left: 300px;
    }
    img:nth-child(2) {
      top: 80px;
      left: 300px;
    }
    img:nth-child(3) {
      top: 120px;
      left: 490px;
    }
    img:nth-child(4) {
      top: -90px;
      left: 540px;
    }
    img:nth-child(5) {
      top: -120px;
      left: 690px;
    }
    img:nth-child(6) {
      top: -260px;
      left: 850px;
      @media screen and (max-width: 1047px) {
        display: none;
      }
    }
  }
`;
