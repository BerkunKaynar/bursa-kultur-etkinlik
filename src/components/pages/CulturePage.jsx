import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlaces } from "../../redux/action";
import { useNavigate } from "react-router-dom";
import PlaceDetail from "./PlaceDetail";
import Papa from "papaparse";

const CulturePage = () => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.culture.places);
  const navigate = useNavigate();
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleCardClick = (gmlId) => {
    const selected = places.find((place) => place.gml_id === gmlId);

    if (!selected || !selected.geojson) {
      console.error("Invalid GeoJSON data:", selected);
      return;
    }

    const parsedGeojson = JSON.parse(selected.geojson);

    // koordinat özelliklerini kontrol et
    if (!parsedGeojson || !parsedGeojson.coordinates) {
      console.error("Invalid Coordinates data in GeoJSON:", parsedGeojson);
      return;
    }

    setSelectedPlace(selected);

    // tıklanan idyi local storage a kaydet
    localStorage.setItem("selectedGmlId", gmlId);

    // geojson verilerini local storage a kaydet
    const geojson = {
      type: "Point",
      coordinates: parsedGeojson.coordinates,
    };
    localStorage.setItem("selectedGeojson", JSON.stringify(geojson));

    // koordinatları konsola yazdır
    console.log("Selected Coordinates:", parsedGeojson.coordinates);

    navigate(`/placedetail/${gmlId}`);
  };

  useEffect(() => {
    const csvFilePath = "/data/bursa_tarihimekanlar.csv";

    fetch(csvFilePath)
      .then((response) => response.text())
      .then((csvData) => {
        Papa.parse(csvData, {
          header: true,
          dynamicTyping: true,
          complete: function (results) {
            console.log("JSON verisi:", results.data);
            dispatch(setPlaces(results.data));
          },
        });
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  }, [dispatch]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1
              style={{ color: "#255899" }}
              className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            >
              Ulu Şehir Bursa'nın Tarihi ve Kültürel Yönlerini Keşfet
            </h1>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Ulu Şehir Bursa'nın mistik atmosferinde, tarihin derinliklerinden
            yükselen kültürel hazineler sizi büyüleyecek. Her köşesi bir öykü,
            her eseri bir sanat şaheseri olan bu şehirde, geçmişin izlerini
            takip ederken zamanın büyülü dokusunu hissedeceksiniz. Geleneksel
            çarşıları, tarihi hanları ve muazzam mimarisiyle Bursa, adeta bir
            açık hava müzesine dönüşmüş durumda. Bu keşif yolculuğunda, geçmişin
            sırlarını gün yüzüne çıkaran her anı, ruhunuzu büyüleyici bir
            serüvene davet ediyor.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 cursor-pointer">
          {places.map((place, index) => (
            <div
              key={index}
              className="xl:w-1/4 md:w-1/2 p-4"
              onClick={() => handleCardClick(place.gml_id)}
            >
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={place.resim}
                  alt="content"
                />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {place.ad}
                </h2>
                <p className="leading-relaxed text-base">{place.alt_katego}</p>
              </div>
            </div>
          ))}
        </div>
        {selectedPlace && <PlaceDetail place={selectedPlace} />}
      </div>
    </section>
  );
};

export default CulturePage;
