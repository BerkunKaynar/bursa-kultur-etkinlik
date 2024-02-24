import React from "react";

const ArtPage = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1
              style={{ color: "#255899" }}
              className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0"
            >
              Bursa'nın Kültür ve Sanat Zengini Yüzü: Tarih ve Sanatın Buluşma
              Noktası
            </h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              Bursa, tarihi zenginlikleri ve sanatla iç içe geçmiş dokusuyla,
              Türkiye'nin kültür başkentlerinden biri olarak öne çıkıyor. Şehir,
              sadece tarihiyle değil, aynı zamanda sanatla yoğrulmuş bir mirasa
              da ev sahipliği yapmaktadır. İşte Bursa'nın sanat ile alakalı
              önemli ve etkileyici noktaları:
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/src/assets/arkeoloji.jpg"
              />
            </div>
            <h2
              style={{ color: "#255899" }}
              className="text-xl font-medium title-font text-gray-900 mt-5"
            >
              Bursa Kültür Park:
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Şehrin kalbinde bulunan Bursa Kültür Park, sanat etkinlikleriyle
              dolup taşan bir mekan olarak bilinir. Konserlerden tiyatro
              gösterimlerine, sergilere kadar birçok etkinliğe ev sahipliği
              yaparak, şehirde sanatın canlılığını sürdürür.
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/src/assets/kentmuzesi.jpg"
              />
            </div>
            <h2
              style={{ color: "#255899" }}
              className="text-xl font-medium title-font text-gray-900 mt-5"
            >
              Bursa Kent Müzesi:
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Bursa Kent Müzesi, şehrin tarihini ve kültürünü yansıtan bir
              hazine niteliğindedir. Arkeolojik eserlerden sanat galerilerine
              kadar geniş bir yelpazede koleksiyon barındırır ve ziyaretçilere
              Bursa'nın kültürel evrimini anlama fırsatı sunar.
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/src/assets/atatürkkosku.jpg"
              />
            </div>
            <h2
              style={{ color: "#255899" }}
              className="text-xl font-medium title-font text-gray-900 mt-5"
            >
              Atatürk Müzesi
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Müze, Bursa'nın tarih kokan atmosferine sahip olan Osmangazi
              ilçesinde, Atatürk'ün Bursa ziyaretleri sırasında kullandığı
              köşktür. Bu köşk, mimari yapısıyla ziyaretçilere Osmanlı dönemine
              ait bir atmosfer sunarken, aynı zamanda Atatürk'ün Bursa'ya özel
              önem verdiği bir mekanı temsil etmektedir.
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/src/assets/fetihmuzesi.jpg"
              />
            </div>
            <h2
              style={{ color: "#255899" }}
              className="text-xl font-medium title-font text-gray-900 mt-5"
            >
              Panorama 1326 Bursa Fetih Müzesi
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Bursa, Osmanlı İmparatorluğu'nun ilk başkenti olma özelliği
              taşıyan tarihi bir şehirdir. Şehrin tarihine ışık tutan önemli
              müzelerden biri de Panorama 1326 Bursa Fetih Müzesi'dir. Bu müze,
              ziyaretçilere Osmanlı'nın Bursa'yı fethetme sürecini görsel bir
              şölenle sunarak tarihi bir yolculuğa çıkarma vaat ediyor.
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/src/assets/arabamuzesi.jpg"
              />
            </div>
            <h2
              style={{ color: "#255899" }}
              className="text-xl font-medium title-font text-gray-900 mt-5"
            >
              Tofaş Bursa Anadolu Arabaları Müzesi
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Bursa'nın tarih kokan sokaklarında, otomotiv dünyasının büyüleyici
              bir serüvenine tanıklık etmek isteyenler için Tofaş Bursa Anadolu
              Arabaları Müzesi, gerçek bir zaman yolculuğu sunan nadir
              müzelerden biridir.
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/src/assets/tayyare.jpg"
              />
            </div>
            <h2
              style={{ color: "#255899" }}
              className="text-xl font-medium title-font text-gray-900 mt-5"
            >
              Tayyare Kültür Merkezi
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Her yıl çeşitli tiyatro toplulukları tarafından sahnelenen
              oyunlar, Bursa Tayyare Kültür Merkezi'nin tiyatro etkinlikleri
              kapsamında yer alır. Ziyaretçiler, farklı türlerdeki oyunları
              izleyerek sanatın ve sahne performanslarının keyfini çıkarır.
              Tiyatro etkinlikleri, merkezi ziyaret edenlerin kültürel bir şölen
              yaşamalarına olanak tanır. Ayrıca, sanat galerileri ve sergi
              alanları da Bursa Tayyare Kültür Merkezi'nin vazgeçilmez bir
              parçasını oluşturur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtPage;
