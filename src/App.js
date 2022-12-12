import { YMaps } from '@pbe/react-yandex-maps';
import './App.scss';
import MapWithFavPlaces from './components/MapWithFavPlaces';

import { SwiperSlider } from './components/SwiperSlider/SwiperSlider'
import './App.css';

function App() {
  return (
    <div className='container'>
      <SwiperSlider />
      <YMaps>
        <MapWithFavPlaces />
      </YMaps>
    </div>
  );
}

export default App;
