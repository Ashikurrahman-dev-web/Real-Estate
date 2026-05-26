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

export default function LeafMap() {
  return (
    <div className="w-full h-full">
      <MapContainer
        center={[23.69659, 90.45074]}
        zoom={15}
        scrollWheelZoom={true}
        className="w-full h-full rounded-3xl"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={[23.69659, 90.45074]}
          icon={customIcon}
        >
          <Popup>
            Bank Tower (1st Floor) Titas Gas Road, Shonir Akhra Dhaka-1236
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}