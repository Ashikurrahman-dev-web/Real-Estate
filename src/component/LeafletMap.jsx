"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function LeafletMap() {
  return (
    <div className="w-full h-full">
      <MapContainer
        center={[23.704, 90.448]}
        zoom={15}
        scrollWheelZoom={true}
        className="w-full h-full rounded-3xl"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={[23.704, 90.448]}
          icon={customIcon}
        >
          <Popup>
            54 Palashpur, Gas Road Kadamtoli,
            Dhaka-1236
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}