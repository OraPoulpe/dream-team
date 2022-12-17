import { YMaps } from "@pbe/react-yandex-maps";
import "./App.scss";

import ThemeProvider from "./context/ThemeProvider";
import LangProvider from "./context/LangProvider";
import Header from "./components/Header";
import MapWithFavPlaces from "./components/MapWithFavPlaces";
import { SwiperSlider } from "./components/SwiperSlider/SwiperSlider";

function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <Header />
        <main className="container">
          <SwiperSlider />
          <YMaps>
            <MapWithFavPlaces />
          </YMaps>
        </main>
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
