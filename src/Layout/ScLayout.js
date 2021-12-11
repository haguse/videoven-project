import styled from "styled-components";
import AppealBg from "../images/AppealSection/Bakgrounds/AppealBg.svg";
import AppealLines from "../images/AppealSection/Bakgrounds/AppealLines.svg";

export const Videos = styled.div`
  min-height: 100vh;
`;

export const Appeal = styled.div`
  min-height: 100vh;
  display: flex;
  background-image: url(${AppealLines}), url(${AppealBg});
  background-repeat: no-repeat, no-repeat;
  background-size: 100%, 100%;
  z-index: 1;
  position: relative;
`;

export const EasyUsage = styled.div`
  min-height: 100vh;
`;
