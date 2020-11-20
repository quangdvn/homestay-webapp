import React from 'react';
import { Element } from 'react-scroll';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './styles.scss';

// eslint-disable-next-line no-underscore-dangle
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const PlaceLocation = ({ location }) => {
  const position = [location.latitude, location.longitude];

  return (
    <Element className="place-details-location" name="location">
      <h4 className="title mb-4">Location</h4>
      <div className="location">
        <MapContainer
          className="map-container"
          center={position}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <b className="popup-text">Awesome Hotel</b>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </Element>
  );
};

export default PlaceLocation;
