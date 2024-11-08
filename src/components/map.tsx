'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet';

// Fix the marker icon issues for Leaflet in React
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapComponent = () => {
  const position: LatLngExpression = [6.544056, 3.366576]; // Ensure this is of type LatLngExpression

  return (
    <MapContainer center={position} zoom={15} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          1 Ogunlesi Street, Off Awoyokun, Onipanu, Lagos
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
