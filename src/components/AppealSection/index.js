import React from "react";
import { Container } from "./ScAppealSection";
import ScreenContent from "./ScreenContent";
import CommentContent from "./CommentContent";

const AppealSection = () => {
  return (
    <Container className="container absolute">
      <ScreenContent />
      <CommentContent />
    </Container>
  );
};

export default AppealSection;
