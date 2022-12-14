import { YMaps } from '@pbe/react-yandex-maps';
import './App.scss';

import Header from './components/Header';
import MapWithFavPlaces from './components/MapWithFavPlaces';
import { SwiperSlider } from './components/SwiperSlider/SwiperSlider'


function App() {
  return (<>
    <Header />
    <main className='container'>
      <SwiperSlider />
      <YMaps>
        <MapWithFavPlaces />
      </YMaps>
    </main>
  </>);
}

export default App;
