import { YMaps } from "@pbe/react-yandex-maps";
import MapWithFavPlaces from "../../components/MapWithFavPlaces";
import { SwiperSlider } from "../../components/SwiperSlider/SwiperSlider";
import Feedback from "../../components/Feedback/Feedback";

export const Home = () => {
  return (
    <>
      <SwiperSlider />
      <YMaps>
        <MapWithFavPlaces />
      </YMaps>
      <Feedback />
    </>
  );
};
