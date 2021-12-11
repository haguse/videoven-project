import React from "react";
import { Screen, ScreenShadow, AnswerArea } from "./ScScreenContent";
import { AiFillPlayCircle, AiOutlineVideoCamera } from "react-icons/ai";
import { BiText } from "react-icons/bi";
import { MdSettingsVoice } from "react-icons/md";
const ScreenContent = () => {
  return (
    <>
      <Screen>
        <ScreenShadow />
        <div className="time">
          <p>00:06 / 00:09</p>
        </div>
        <div className="play">
          <AiFillPlayCircle className="play__icon" />
        </div>
        <AnswerArea>
          <div className="answer">
            <p className="">Nasıl cevaplamak istersiniz?</p>
          </div>
          <div className="answers">
            <div>
              <AiOutlineVideoCamera className="answers__icon" />
              <p>Video</p>
            </div>
            <div>
              <MdSettingsVoice className="answers__icon" />
              <p>Ses Kaydı</p>
            </div>
            <div>
              <BiText className="answers__icon" />
              <p>Yazı</p>
            </div>
          </div>
          <div className="videoven">
            <p className="videoven__text">
              Göndermeden önce alıştırma yapabilirsin
            </p>
          </div>
        </AnswerArea>
      </Screen>
    </>
  );
};

export default ScreenContent;
