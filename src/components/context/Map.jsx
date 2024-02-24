import React, { useCallback, useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

export const Map = (props) => {
  const { isLoaded } = props;

  const containerStyle = {
    width: "50%",
    height: "400px",
  };

  // localstorage dan çek
  const storedCenter = JSON.parse(localStorage.getItem("selectedCenter"));

  const initialCenter =
    storedCenter &&
    typeof storedCenter === "object" &&
    "lat" in storedCenter &&
    "lng" in storedCenter
      ? storedCenter
      : {
          lat: 40.192169921,
          lng: 29.046993381,
        };

  // state kullanarak center değerini tut
  const [center, setCenter] = useState(initialCenter);

  const renderMap = useCallback(() => {
    return (
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {isLoaded && <Marker position={center} />}
      </GoogleMap>
    );
  }, [isLoaded, center]);

  // localstoragedaki center bilgisinde değişiklik olduğunda güncelle
  useEffect(
    () => {
      const storedCenter = JSON.parse(localStorage.getItem("selectedCenter"));
      if (storedCenter) {
        setCenter(storedCenter);
      }
    },
    [
      /* Bağımlılıklarınızı buraya ekleyin */
    ]
  );

  return (
    <div className="flex justify-center">
      {isLoaded ? renderMap() : <div>Loading...</div>}
    </div>
  );
};

export default Map;
