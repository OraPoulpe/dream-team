import { useEffect } from "react";
import { YMaps } from "@pbe/react-yandex-maps";

import MapWithFavPlaces from "../../components/MapWithFavPlaces";
import SwiperSlider from "../../components/SwiperSlider/SwiperSlider";
import Feedback from "../../components/Feedback/Feedback";
import HomeSection from "../../components/HomeSection/HomeSection";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <HomeSection />
      <div className="container">
        <SwiperSlider />
        <YMaps>
          <MapWithFavPlaces />
        </YMaps>
        <Feedback />
      </div>
    </>
  );
}
