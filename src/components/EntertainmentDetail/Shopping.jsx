import React from "react";

export const Shopping = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded"
            src="/src/assets/alisverisbursa.jpg"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Bursa'nın
            </h2>
            <h1
              style={{ color: "#255899" }}
              className="text-gray-900 text-3xl title-font font-medium mb-1"
            >
              Alışveriş Cazibesi
            </h1>
            <div className="flex mb-4"></div>
            <p className="leading-relaxed">
              Bursa, tarihi ve kültürel zenginlikleriyle bilinen bir şehir
              olmanın yanı sıra alışveriş deneyimiyle de büyüleyici bir
              destinasyondur. Ulu Şehir Bursa, geleneksel çarşıları, modern
              alışveriş merkezleri ve el sanatlarıyla bezenmiş mağazalarıyla
              zengin bir alışveriş atmosferine sahiptir.
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex ml-6 items-center"></div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1
            style={{ color: "#255899" }}
            className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
          >
            Modern Alışveriş Merkezleri ve Tarihi Çarşılar
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Bursa'nın zengin alışveriş atmosferi, tarihi çarşıları ve modern
            alışveriş merkezleriyle göz kamaştırıcı bir deneyim sunar. Bursa'da
            geçmişin ve geleceğin dokusunu aynı anda hissederek, şehrin
            alışveriş cazibesinin tadını çıkarabilirsiniz.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mb-20 ml-20 mr-20">
        <div className="flex flex-wrap w-1/2">
          <div className="md:p-2 p-1 w-1/2">
            <img
              alt="Aynalı Çarşı"
              className="w-full object-cover h-full object-center block"
              src="/src/assets/aynalicarsi.jpg"
            />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <img
              alt="Havlucular Çarşısı"
              className="w-full object-cover h-full object-center block"
              src="/src/assets/havlucular.jpg"
            />
          </div>
          <div className="md:p-2 p-1 w-full">
            <img
              alt="Koru Park"
              className="w-full h-full object-cover object-center block"
              src="/src/assets/koru.jpg"
            />
          </div>
        </div>
        <div className="flex flex-wrap w-1/2">
          <div className="md:p-2 p-1 w-full">
            <img
              alt="İpekçiler"
              className="w-full h-full object-cover object-center block"
              src="/src/assets/ipekciler.jpg"
            />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <img
              alt="Sur Yapı"
              className="w-full object-cover h-full object-center block"
              src="/src/assets/suryap.jpg"
            />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <img
              alt="Uzun Çarşı"
              className="w-full object-cover h-full object-center block"
              src="/src/assets/uzuncarsi.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
