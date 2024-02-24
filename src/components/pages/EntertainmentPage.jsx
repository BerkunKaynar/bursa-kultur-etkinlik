import React from "react";
import { Link } from "react-router-dom";

const EntertainmentPage = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1
              style={{ color: "#255899" }}
              className="text-2xl font-medium title-font mb-4 text-gray-900"
            >
              Eğlence
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Bursa, tarihî atmosferi, çeşitli alışveriş olanakları, dağ ve
              denizi, lezzetli geleneksel mutfağıyla eğlence severler için ideal
              bir destinasyondur. Şehir, tarihi ve modern dokularını bir araya
              getirerek ziyaretçilerine unutulmaz anlar sunar.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <Link to="/alisveris" className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="Hanlar Bölgesi"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="/src/assets/hanlar.jpg"
                />
                <div className="w-full">
                  <h2
                    style={{ color: "#255899" }}
                    className="title-font font-medium text-lg text-gray-900"
                  >
                    Alışveriş
                  </h2>
                  <h3 className="text-gray-500 mb-3">
                    Tarihi Çarşılar: Alışveriş Keyfi
                  </h3>
                  <p className="mb-4">
                    Hanlar Bölgesi'nde tarih kokan çarşılarda alışveriş yaparak
                    keyifli bir gün geçirebilirsiniz.
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/lezzet-duraklari" className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="İskender Kebap"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="/src/assets/iskender.jpg"
                />
                <div className="w-full">
                  <h2
                    style={{ color: "#255899" }}
                    className="title-font font-medium text-lg text-gray-900"
                  >
                    Lezzet Durakları
                  </h2>
                  <h3 className="text-gray-500 mb-3">Lezzet Şehri Bursa</h3>
                  <p className="mb-4">
                    Bursa'da tadına doyulmaz İskender, kestane şekeri, tahinli
                    pide gibi lezzetleri keşfedin!
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/uludag" className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="Uludağ"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="/src/assets/uludag1.jpg"
                />
                <div className="w-full">
                  <h2
                    style={{ color: "#255899" }}
                    className="title-font font-medium text-lg text-gray-900"
                  >
                    Uludağ
                  </h2>
                  <h3 className="text-gray-500 mb-3">Zirvede Huzur: Uludağ</h3>
                  <p className="mb-4">
                    Uludağ'da kış sporları, yazın doğa keyfi unutulmaz anılar
                    bırakır.
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/deniz" className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="Mudanya"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="/src/assets/mudanya.jpg"
                />
                <div className="w-full">
                  <h2
                    style={{ color: "#255899" }}
                    className="title-font font-medium text-lg text-gray-900"
                  >
                    Deniz Havası
                  </h2>
                  <h3 className="text-gray-500 mb-3">Mavi ve yeşil...</h3>
                  <p className="mb-4">
                    Mudanya sahillerinde huzur, Marmara Denizi'nin kucakladığı
                    eşsiz güzellik.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default EntertainmentPage;
