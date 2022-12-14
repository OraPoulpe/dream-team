import { YMaps } from '@pbe/react-yandex-maps';
import './App.scss';
import MapWithFavPlaces from './components/MapWithFavPlaces';

import { SwiperSlider } from './components/SwiperSlider/SwiperSlider'
import './App.css';
import Feedback from './components/Feedback/Feedback';

function App() {
  return (
    <div className='container'>
      <SwiperSlider />
      <YMaps>
        <MapWithFavPlaces />
      </YMaps>
      <Feedback/>
    </div>
  );
}

export default App;
