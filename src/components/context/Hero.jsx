import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="text-white-600 body-font mb-20">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1
            style={{ color: "#14b8a6" }}
            className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
          >
            Bursa'nın Kültürel Zenginlikleriyle Buluşun: <br />
            Sanat, Eğlence ve Kültürün Kalbindeki Şehir
          </h1>
        </div>
        <div
          style={{ marginBottom: "70px" }}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
        >
          <img
            className="mt-10 object-cover object-center rounded"
            alt="hero"
            src="/src/assets/ulusehir.png"
          />
        </div>
      </div>
      <div className="font-small ml-20 mr-20">
        <p style={{ color: "black" }} className="mb-8 leading-relaxed">
          Bursa'nın zengin tarihini, kültürel mirasını ve eşsiz doğal
          güzelliklerini keşfetmek için tasarlanan web sitemizde, şehrin
          eğlence, sanat ve kültür dolu dünyasına bir kapı aralıyoruz. Bursa'nın
          mistik atmosferi, tarihi mekanları ve renkli etkinlikleriyle dolu olan
          bu platformda, kullanıcılarımıza unutulmaz bir deneyim sunuyoruz.
          Sanat galerilerinden tarihi yerlere, konser mekanlarından festivallere
          kadar geniş bir yelpazede kültür ve eğlence aktivitelerini kapsayan
          sitemiz, herkesin ilgi alanlarına hitap ediyor. Bursa'nın kültürel
          çeşitliliğini ve eğlence sektöründeki zenginliğini keşfetmek
          isteyenler için rehber niteliğinde olan web sitemiz, şehri
          derinlemesine deneyimleme fırsatı sunuyor. Şehre dair güncel
          etkinlikler, sanat galerileri, konserler ve daha fazlasını
          bulabileceğiniz sitemiz, Bursa'nın renkli dünyasını sizlere taşıyor.
          Keşfedin, deneyimleyin ve Bursa'nın eğlence, sanat ve kültürünü
          doyasıya yaşayın!
        </p>
        <div className="flex justify-center">
          <Link
            to="/entertainmentpage"
            style={{ background: "#14b8a6" }}
            className=" text-white border-0 py-2 px-6 rounded text-lg"
          >
            Keşfet
          </Link>
        </div>
      </div>
    </section>
  );
};
