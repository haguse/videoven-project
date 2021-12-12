import React from "react";
import { CommentContainer, Comment } from "./ScCommentContent";

const CommentContent = () => {
  return (
    <CommentContainer>
      <div className="label">
        <p>
          Güçlü Bir İletişim İçin <br /> Videoyla Hitap Edin
        </p>
      </div>
      <Comment>
        <div className="arrow-bg"></div>
        <div id="corner" className="outer">
          <div className="inner"></div>
          <p className="author">Tanem Seçkin - CRO @Koluman</p>
          <p className="comment">
            Kısa zamanda, çok daha az eforla, büyük ölçekli geri dönüşler
            alabildiğimiz için çalışmalarımızdaki verimi ciddi biçimde artırdı
            Videoven.
          </p>
        </div>
      </Comment>
    </CommentContainer>
  );
};

export default CommentContent;
