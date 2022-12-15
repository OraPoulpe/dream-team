import { YMaps } from '@pbe/react-yandex-maps';
import './App.scss';

import Header from './components/Header';
import MapWithFavPlaces from './components/MapWithFavPlaces';
import { SwiperSlider } from './components/SwiperSlider/SwiperSlider'
import './App.css';
import Feedback from './components/Feedback/Feedback';

function App() {
  return (<>
    <Header />
    <main className='container'>
      <SwiperSlider />
      <YMaps>
        <MapWithFavPlaces />
      </YMaps>
      <Feedback/>
    </main>
  </>);
}

export default App;
