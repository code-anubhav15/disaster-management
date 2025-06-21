"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix leaflet default icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

interface LeafletMapProps {
  mapRef?: React.MutableRefObject<L.Map | null>;
  markers?: {
    position: [number, number];
    label: string;
  }[];
}

// Inner component to attach mapRef
const MapRefSetter = ({ mapRef }: { mapRef: React.MutableRefObject<L.Map | null> }) => {
  const map = useMap();

  useEffect(() => {
    if (mapRef) {
      mapRef.current = map;
    }
  }, [map, mapRef]);

  return null;
};

export default function LeafletMap({ mapRef, markers = [] }: LeafletMapProps) {
  return (
    <MapContainer
      center={[20.5937, 78.9629]} // Default: India
      zoom={5}
      scrollWheelZoom={true}
      zoomControl={false} // hide default zoom buttons
      className="w-full h-full z-10"
    >
      {/* Attach mapRef once map is ready */}
      {mapRef && <MapRefSetter mapRef={mapRef} />}

      {/* Map tiles */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Render dynamic markers */}
      {markers.map((marker, idx) => (
        <Marker key={idx} position={marker.position}>
          <Popup>{marker.label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
