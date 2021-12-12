import React from "react";
import { Container } from "./ScVideosContent";

const VideosContent = () => {
  return (
    <Container>
      <div className="outer">
        <div className="inner"></div>
        <div className="texts">
          <p className="texts__first">İşinizi Güçlendirecek Videolar</p>
          <div className="yellow-circle"></div>
          <div className="black-circle"></div>
          <p className="texts__second">Artık İnteraktif</p>
          <p className="texts__third">
            Videoven ile hedeflediğiniz kitleye videolar aracılığıyla ulaşın.
            Tek hamlede binlerce kullanıcıdan zahmetsizce bilgi alın.
            Maliyetlerinizi azaltın, müşteri memnuniyetini ve satışlarınızı
            artırın.
          </p>
          <p className="texts__fourth">
            Anlatan, seçenek sunan, bilgi toplayan videolarla çevrimiçi
            iletişimin yeni seviyesine adım atın.
          </p>
        </div>
        <button>Hemen Deneyin</button>
      </div>
    </Container>
  );
};

export default VideosContent;
