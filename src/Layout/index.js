import React from "react";
import { VideosSection, AppealSection, EasyUsageSection } from "./ScLayout";
import Navbar from "../components/Navbar";

const index = () => {
  return (
    <>
      <VideosSection>
        <Navbar />
      </VideosSection>
      <AppealSection />
      <EasyUsageSection />
    </>
  );
};

export default index;