import React from "react";
import {
  Container,
  Phone,
  PhoneShadow,
  Star,
  StarShadow,
  TextArea,
  TextAreaShadow,
  AnswerArea,
} from "./ScPhoneContent";
import {
  AiFillPlayCircle,
  AiOutlineStar,
  AiOutlineVideoCamera,
} from "react-icons/ai";
import { BiText } from "react-icons/bi";
import { MdSettingsVoice } from "react-icons/md";

const PhoneContent = () => {
  return (
    <Container>
      <PhoneShadow />
      <TextAreaShadow />
      <TextArea>
        <p>{`Merhaba :)`} </p>
      </TextArea>
      <StarShadow />
      <Star>
        <AiOutlineStar className="star__icon" />
      </Star>
      <Phone className="phone">
        <div className="play">
          <AiFillPlayCircle className="play__icon" />
        </div>
        <AnswerArea>
          <p className="answer">Nasıl cevaplamak istersiniz?</p>
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
            <p className="videoven__text">videoven tarafından gönderildi</p>
          </div>
        </AnswerArea>
      </Phone>
    </Container>
  );
};

export default PhoneContent;
