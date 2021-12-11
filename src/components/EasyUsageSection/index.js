import React from "react";
import { Container, Play } from "./ScEasyUsageSection";
import ContentImage from "../../images/EasyUsageSection/Backgrounds/InvidzaUI.png";
import Woman from "../../images/EasyUsageSection/Backgrounds/Woman.png";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { IoEllipse } from "react-icons/io5";
import { GrPlayFill, GrPlay } from "react-icons/gr";

const EasyUsageSection = () => {
  return (
    <Container className="container">
      <div className="easy-usage">
        <p className="easy-usage__title">Kolayca Kullanın</p>
        <p className="easy-usage__description">
          Videoven’ın sade ve kolay kullanılan arayüzü sayesinde <br />
          videolarınızı oluşturmaya başlamak için vakit kaybetmeyin.
        </p>
      </div>
      <div className="content">
        <div className="content__timer">
          <IoEllipse />
          <p className="content__timer__text">01:22</p>
        </div>
        <div className="content__timer__shadow"></div>
        <img
          className="content__videovenui"
          src={ContentImage}
          alt="Videoven UI"
        />
        <div className="content__woman">
          <img src={Woman} alt="Woman" />
        </div>
        <Play>
          <div>
            <GrPlayFill className="play play1" />
            <GrPlay className="play play2" />
          </div>
        </Play>

        <div className="star1shadow">
          <AiFillStar className="starshadow" />
        </div>
        <div className="star2shadow">
          <AiFillStar className="starshadow" />
        </div>
        <div className="star3shadow">
          <AiFillStar className="starshadow" />
        </div>
        <div className="star1">
          <AiOutlineStar className="star" />
        </div>
        <div className="star2">
          <AiOutlineStar className="star" />
        </div>
        <div className="star3">
          <AiOutlineStar className="star" />
        </div>
      </div>
    </Container>
  );
};

export default EasyUsageSection;
