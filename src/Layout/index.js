import React from "react";
import { Videos, Appeal, EasyUsage } from "./ScLayout";
import Navbar from "../components/VideosSection/Navbar";
import VideosSection from "../components/VideosSection";
import AppealSection from "../components/AppealSection";
import EasyUsageSection from "../components/EasyUsageSection";

const index = () => {
  return (
    <>
      <Videos className="container">
        <Navbar />
        <VideosSection />
      </Videos>
      <Appeal>
        <AppealSection />
      </Appeal>
      <EasyUsage>
        <EasyUsageSection />
      </EasyUsage>
    </>
  );
};

export default index;
