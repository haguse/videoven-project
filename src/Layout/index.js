import React from "react";
import { Videos, Appeal, EasyUsage } from "./ScLayout";
import Navbar from "../components/VideosSection/Navbar";
import VideosSection from "../components/VideosSection";

const index = () => {
  return (
    <>
      <Videos className="container">
        <Navbar />
        <VideosSection />
      </Videos>
      <Appeal></Appeal>
      <EasyUsage></EasyUsage>
    </>
  );
};

export default index;
