import React from "react";
import VideosContent from "./VideosContent";
import PhoneContent from "./PhoneContent";
import { Container } from "./ScVideosSection";

const VideosSection = () => {
  return (
    <Container className="">
      <VideosContent />
      <PhoneContent />
    </Container>
  );
};

export default VideosSection;
