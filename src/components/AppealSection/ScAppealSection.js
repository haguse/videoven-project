import styled from "styled-components";
// import Lines from "../../images/AppealSection/Bakgrounds/AppealLines.svg";
// import Bg from "../../images/AppealSection/Bakgrounds/AppealBg.svg";

export const Container = styled.div`
  display: flex;
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
`;
