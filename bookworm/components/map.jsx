import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // needed for map to load properly
import "leaflet-defaulticon-compatibility"; // needed for icon compatiability
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"; // needed for icon compatiability

import { useEffect, useState } from "react";

import { useGeolocation } from "@/hooks/useGeolocation";

function Map() {
  const [mapPosition, setMapPosition] = useState([1.297588, 103.854309]);
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  useEffect(
    function () {
      if (geolocationPosition)
        setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    },
    [geolocationPosition]
  );

  return (
    <div>
      {!geolocationPosition && (
        <button onClick={getPosition}>
          {isLoadingPosition ? "Loading..." : "Use your position"}
        </button>
      )}
      <MapContainer center={mapPosition} zoom={17} style={{ height: "100vh" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[1.297588, 103.854309]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <ChangeCenter position={mapPosition} />
      </MapContainer>
    </div>
  );

  function ChangeCenter({ position }) {
    const map = useMap();
    console.log(position);
    map.setView(position);
    return null;
  }
}

export default Map;
