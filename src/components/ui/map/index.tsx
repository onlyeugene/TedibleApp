// components/Map.tsx
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Map: React.FC = () => {
  const center: [number, number] = [6.5417, 3.3695]; // Lagos, Nigeria
  const zoom = 13;

  useEffect(() => {
    console.log("Map center:", center);
  }, [center]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={defaultIcon}>
          <Popup>
            Lagos, Nigeria <br /> A central location.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

