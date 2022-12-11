import { useState } from 'react';
import { Map, Placemark } from '@pbe/react-yandex-maps';
import classNames from 'classnames';

import favPlaces from '../../mock/favPlaces'
import team from '../../mock/team'
import mapMarkerInactiveImg from '../../img/mapMarkerInactive.png';
import mapMarkerActiveImg from '../../img/mapMarkerActive.png';
import './index.scss';


function getPlacesByTeammateId(id) {
    return favPlaces.filter(place => place.whose_id === id)
}


function getPlaceById(id) {
    return favPlaces.find(place => place.id === id)
}


export default function MapWithFavPlaces() {
    const [activeMapMarker, setActiveMapMarker]= useState(null)

    function handleClickOnMapMarker(id) {
        setActiveMapMarker(id)
    }

    return (
        <section className="favorite-places container">
            <ul className="favorite-places__data">
                {team.map(teammate =>
                    <li key={teammate.id} className="data__teammate">
                        <h3 className="teammate__name">
                            {teammate.name} {teammate.surname}
                        </h3>
                        <ul className="teammate__places">
                            {getPlacesByTeammateId(teammate.id).map(place =>
                                <li 
                                    key={place.id} 
                                    className="places__place" 
                                    onClick={() => handleClickOnMapMarker(place.id)}
                                >
                                    {
                                        place.id === activeMapMarker ?
                                        <img src={mapMarkerActiveImg} alt="active map marker" className="place__map-marker" /> :
                                        <img src={mapMarkerInactiveImg} alt="inactive map marker" className="place__map-marker" />
                                    }
                                    <span className={classNames("place__address", {
                                        active: place.id === activeMapMarker
                                    })}>
                                        {place.address}
                                    </span>
                                </li>
                            )}
                        </ul>
                    </li>
                )}      
            </ul>

            <Map
                className="favorite-places__map"
                state={{
                    center: activeMapMarker !== null ? [
                        getPlaceById(activeMapMarker).lat, 
                        getPlaceById(activeMapMarker).lon
                    ] : [56.75, 38.57],
                    zoom: activeMapMarker !== null ? 9 : 6,
                }}
                options={{
                    type: "yandex#satellite"
                }}
            >
                {favPlaces.map(place =>
                    <Placemark
                        key={place.id} 
                        geometry={[place.lat, place.lon]} 
                        options={{
                            iconLayout: "default#image",
                            iconImageHref: place.id === activeMapMarker ? mapMarkerActiveImg : mapMarkerInactiveImg,
                            iconImageSize: [40, 40],
                        }}
                        onCLick={() => handleClickOnMapMarker(place.id)}
                    />
                )}
            </Map>
        </section>
    );
}