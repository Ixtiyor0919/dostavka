import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = (props) => {
  const [center, setCenter] = useState({ lat: 11.0168, lng: 76.9558 });
  const [zoom, setZoom] = useState(11);
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "add your api key" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent lat={11.0168} lng={76.9558} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;