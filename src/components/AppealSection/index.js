import React from "react";
import { Container } from "./ScAppealSection";
import ScreenContent from "./ScreenContent";
import CommentContent from "./CommentContent";

import People1 from "../../images/AppealSection/People/1.png";
import People2 from "../../images/AppealSection/People/2.png";
import People3 from "../../images/AppealSection/People/3.png";
import People4 from "../../images/AppealSection/People/4.png";
import People5 from "../../images/AppealSection/People/5.png";
import People6 from "../../images/AppealSection/People/6.png";

const AppealSection = () => {
  return (
    <Container className="container">
      <div className="peoples">
        <img src={People1} alt="People" />
        <img src={People2} alt="People" />
        <img src={People3} alt="People" />
        <img src={People4} alt="People" />
        <img src={People5} alt="People" />
        <img src={People6} alt="People" />
      </div>
      <ScreenContent />
      <CommentContent />
    </Container>
  );
};

export default AppealSection;
