import { YMaps } from '@pbe/react-yandex-maps';
import './App.scss';
import MapWithFavPlaces from './components/MapWithFavPlaces';


function App() {
  return (
    <YMaps>
      <MapWithFavPlaces />
    </YMaps>
  );
}

export default App;
