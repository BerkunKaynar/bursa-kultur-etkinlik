import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { mapOptions } from "../context/MapConfig";
import { useJsApiLoader } from "@react-google-maps/api";
import Map from "../context/Map.jsx";
import { setPlaces } from "../../redux/action.js";
import Papa from "papaparse";

const PlaceDetail = () => {
  const { gmlId } = useParams();
  const places = useSelector((state) => state.culture.places);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const place = places.find((p) => p.gml_id === (gmlId || storedGmlId));
  const dispatch = useDispatch();

  // Local storage'dan gml_id'yi al
  const storedGmlId = localStorage.getItem("selectedGmlId");

  useEffect(() => {
    const fetchData = async () => {
      // Asenkron işlemleri bekleyerek places verilerini al
      const response = await fetch("/assets/bursa_tarihimekanlar.csv");
      const csvData = await response.text();

      const results = await new Promise((resolve) => {
        Papa.parse(csvData, {
          header: true,
          dynamicTyping: true,
          complete: (result) => resolve(result),
        });
      });

      // Redux store'a places verilerini set et
      dispatch(setPlaces(results.data));

      // Local storage'dan alınan gml_id'yi kullanarak yeri bul
      const place = places.find((p) => p.gml_id === (gmlId || storedGmlId));

      // place değeri bulunduysa setSelectedPlace ile state'i güncelle
      if (place) {
        setSelectedPlace(place);
      }
    };

    fetchData();
  }, [dispatch, gmlId, storedGmlId, places]);

  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey,
  });

  if (!selectedPlace) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-5 py-24 relative">
          <h1
            style={{ color: "#255899" }}
            className="text-3xl font-bold absolute top-8 left-1/2 transform -translate-x-1/2 p-2 rounded"
          >
            {place.ad}
          </h1>
          <hr style={{ marginBottom: "15px", color: "#14b8a6" }} />
          <div className="lg:w-4/6 mx-auto">
            <img
              alt="content"
              className="object-contain object-center h-full w-full rounded-lg shadow-md"
              src={place.resim}
            />
          </div>

          <div className="sm:w-full sm:pl-8 sm:py-8 mt-4 pt-4 sm:mt-0 flex flex-col items-center">
            <p className="leading-relaxed text-lg mb-4">{place.detay}</p>
            <Link
              to="/culturepage"
              className="text-indigo-500 inline-flex items-center"
            >
              Geri Dön
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              ></svg>
            </Link>
          </div>
          <Map isLoaded={isLoaded} />
        </div>
      </section>
    </>
  );
};

export default PlaceDetail;
