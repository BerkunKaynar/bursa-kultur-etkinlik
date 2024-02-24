import React from "react";

export const Sea = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <h1
          style={{ color: "#255899" }}
          className="text-4xl font-bold text-center mb-10 text-blue-600"
        >
          Bursa: Dağ ve Denizle Buluşan Bir Huzur Kenti
        </h1>
        <div className="lg:w-4/6 mx-auto">
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="text-center"></div>
            <div className=" sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mb-3 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                Şehrin hem dağ hem de deniz manzaralı noktalarında gezip, tarihi
                dokusu ve modern cazibesiyle büyülenmeye hazır olun. Bursa,
                sıcak insanları, lezzetli mutfağı ve benzersiz doğasıyla
                unutulmaz bir deneyim vaat ediyor.
              </p>
            </div>
          </div>
          <div
            style={{ height: "50vh" }}
            className="rounded-lg overflow-hidden"
          >
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="/assets/trilye.jpg"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="/assets/mudanya1.jpg"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1
            style={{ color: "#255899" }}
            className="text-2xl font-bold text-center mb-10 text-blue-600"
          >
            Yeşil ve Mavi: Mudanya, Tirilye
          </h1>
          <p className="mb-8 leading-relaxed">
            Mudanya sahillerinde serin esintiyi hissederek, berrak denizde yüzme
            keyfini yaşayabilir, altın sarısı kumsallarda güneşin sıcak
            dokunuşunu hissedebilirsiniz. Tirilye'nin tarihi dokusu içinde
            dolaşırken, meşhur muhallebisinin eşsiz tadına varabilir, dar
            sokaklarda nostaljik bir atmosferin içinde kaybolabilirsiniz. Gün
            batımında ise, sahilin huzurlu atmosferinde, muhteşem renklere
            bürünen gökyüzünü izlerken, günün yorgunluğunu unutarak dingin bir
            anın keyfini çıkarabilirsiniz. Mudanya'nın doğal güzellikleri ve
            tarihi zenginlikleriyle birleşen bu deneyim, unutulmaz anılar
            biriktirmenize olanak tanır.
          </p>
        </div>
      </div>
    </section>
  );
};
