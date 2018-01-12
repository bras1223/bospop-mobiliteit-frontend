import { h } from "preact";
import GoogleMapReact from "google-map-react";

const MapPage = () => {
  return (
    <GoogleMapReact
      defaultCenter={{ lat: 51.270203, lng: 5.681201 }}
      defaultZoom={14}
    />
  );
};

export default MapPage;
