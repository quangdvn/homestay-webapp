import React from 'react';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import cities from '../../../constants/city';
import './styles.scss';

// eslint-disable-next-line no-underscore-dangle
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const MapComponent = ({ formData, setFormData }) => {
  const map = useMapEvents({
    locationfound: event => {
      map.flyTo(event.latlng, 16);
      setFormData({
        ...formData,
        latitude: event.latlng.lat,
        longitude: event.latlng.lng,
      });
    },
  });

  map.flyTo(
    {
      lat: formData.latitude,
      lng: formData.longitude,
    },
    16
  );

  return (
    <button
      type="button"
      className="current-pos"
      onClick={() => {
        map.locate();
      }}
    >
      Get current location
    </button>
  );
};

const ChooseLocation = ({ formData, setFormData }) => {
  return (
    <div className="choose-location">
      <h4>Step 3: Choose Location</h4>
      <Row form>
        <Col md={4} className="pr-4">
          <FormGroup>
            <Label className="review-label" for="city">
              City
            </Label>
            <Input
              type="select"
              name="city"
              id="city"
              className="review-input text-input"
              value={formData.city_id}
              onChange={event => {
                const value = parseInt(event.target.value, 10);
                if (value !== formData.city_id) {
                  setFormData({
                    ...formData,
                    city_id: value,
                    location_id: cities[value - 1].district[0].district_id,
                    latitude: cities[value - 1].district[0].latitude,
                    longitude: cities[value - 1].district[0].longitude,
                  });
                }
              }}
            >
              {cities.map(item => (
                <option key={item.city_id} value={item.city_id}>
                  {item.name}
                </option>
              ))}
            </Input>
          </FormGroup>
        </Col>
        <Col md={4} className="pr-4">
          <FormGroup>
            <Label className="review-label" for="district">
              District
            </Label>
            <Input
              className="review-input text-input"
              type="select"
              name="district"
              id="district"
              value={formData.location_id}
              onChange={event => {
                const location = cities[formData.city_id - 1].district.find(
                  item => item.district_id === parseInt(event.target.value, 10)
                );
                setFormData({
                  ...formData,
                  location_id: location.district_id,
                  latitude: location.latitude,
                  longitude: location.longitude,
                });
              }}
            >
              {cities[formData.city_id - 1].district.map(item => (
                <option key={item.district_id} value={item.district_id}>
                  {item.name}
                </option>
              ))}
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup className="mt-4">
        <Label className="review-label" for="hotelAddress">
          Hotel Address
        </Label>
        <Input
          className="review-input text-input"
          type="text"
          name="hotelAddress"
          id="hotelAddress"
          required
          value={formData.address}
          onChange={event =>
            setFormData({ ...formData, address: event.target.value })
          }
          placeholder="Write your hotel address here"
        />
      </FormGroup>
      <div className="location mt-5">
        <Label className="review-label" for="hotelAddress">
          Your location is displayed here:
        </Label>
        <MapContainer
          className="map-container"
          center={[formData.latitude, formData.longitude]}
          zoom={16}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[formData.latitude, formData.longitude]} />
          <MapComponent formData={formData} setFormData={setFormData} />
        </MapContainer>
      </div>
    </div>
  );
};

export default ChooseLocation;
