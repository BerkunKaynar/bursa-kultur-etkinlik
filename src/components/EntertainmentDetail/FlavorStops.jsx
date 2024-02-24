import React from "react";

export const FlavorStops = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1
            style={{ color: "#255899" }}
            className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest"
          >
            Lezzet Durakları
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Bursa, tarihi lezzet duraklarıyla ünlüdür. İskender, kemalpaşa
            tatlısı, tahinli pide, cantık, kestane şekeri gibi eşsiz tatlar,
            şehrin zengin mutfak kültürünü yansıtarak damakları şenlendirir.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="iskender"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="/assets//iskender.jpg"
              />
              <div className="flex-grow sm:pl-8">
                <h2
                  style={{ color: "#255899" }}
                  className="title-font font-medium text-lg text-gray-900"
                >
                  İskender Kebap
                </h2>
                <p className="mb-4">
                  Bursa'nın gururu İskender Kebap, döner et, yoğurt ve
                  tereyağıyla muazzam bir lezzeti bir araya getirir. Şehrin
                  gastronomi simgelerinden biri olan bu eşsiz tat, damakları
                  şenlendirir. Şehrin merkezinde, tarihi mekanları ziyaret
                  ettikten sonra Kebapçı İskender'de lezzeti mucidinde
                  deneyimleyebilirsiniz.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="/assets//pideli.jpg"
              />
              <div className="flex-grow sm:pl-8">
                <h2
                  style={{ color: "#255899" }}
                  className="title-font font-medium text-lg text-gray-900"
                >
                  Pideli Köfte
                </h2>
                <p className="mb-4">
                  İnce bulgur ve özenle seçilmiş baharatlarla hazırlanan pideli
                  köfte, lezzetli bir pide ile buluşup yoğurt ve özel sos
                  eşliğinde enfes bir lezzet şöleni sunar. Şehrin merkezinde
                  Tarihi Kayhan Çarşısı'nı ziyaret edip sağlı sollu pideli
                  köftecilerde bu enfes lezzeti deneyimleyebilirsiniz.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="/assets//tahinli.jpg"
              />
              <div className="flex-grow sm:pl-8">
                <h2
                  style={{ color: "#255899" }}
                  className="title-font font-medium text-lg text-gray-900"
                >
                  Tahinli Pide
                </h2>
                <p className="mb-4">
                  Bursa’ya geldiğiniz zaman birisi size hadi tahinli hatta
                  tahanlı pide yemeğe gidelim derse, sakın ona sabah sabah pide
                  mi yenir demeyin. Çünkü 100 yılı aşkın süredir Bursa’nın
                  sembol yiyeceklerinden olan tahinli pide, sabah ve öğlenler
                  yenen lezzetli ve tatlı bir atıştırmalıktır. Tahinli pideyi en
                  iyi yapan yerler Bursa'nın Osmangazi ilçesinde Abdal Camii
                  etrafında bulunur.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="/assets//cantik.jpg"
              />
              <div className="flex-grow sm:pl-8">
                <h2
                  style={{ color: "#255899" }}
                  className="title-font font-medium text-lg text-gray-900"
                >
                  Cantık
                </h2>
                <p className="mb-4">
                  Bursa'da, "Bursa pidesi" olarak anılan cantık, öğle yemekleri
                  kadar özel günlerde de vazgeçilmez bir lezzet olarak sevilerek
                  tüketiliyor. Bursa'da hemen hemen bütün pide salonlarında
                  yıllardır yapılan cantık, hem fiyatı hem de lezzetiyle
                  genellikle öğle yemeklerinin vazgeçilmezi olarak dikkati
                  çekiyor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
