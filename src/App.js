import { YMaps } from '@pbe/react-yandex-maps';
import './App.scss';

import ThemeProvider from './context/ThemeProvider';
import Header from './components/Header';
import MapWithFavPlaces from './components/MapWithFavPlaces';
import { SwiperSlider } from './components/SwiperSlider/SwiperSlider'


function App() {
  return (<ThemeProvider>
    <Header />
    <main className='container'>
      <SwiperSlider />
      <YMaps>
        <MapWithFavPlaces />
      </YMaps>
    </main>
  </ThemeProvider>);
}

export default App;
