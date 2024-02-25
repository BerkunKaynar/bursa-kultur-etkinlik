# Bursa Kültür Etkinlik

Terminal üzerinden; 'npm install' komutlarıyla proje bağımlılıklarını indirin.

Projeyi çalıştırmak içi 'npm run dev' komutunu kullanın.

Proje İçeriği:

Bursa kültür ve etkinlik tanıtım projesi

Proje içerisinde kullanılan teknolojiler :

React.js - Vite, Google Maps Api, Papa Parse, Tailwind CSS, React Router Dom, ReduxTool

Veriler Açık Yeşil Bursa veri setlerinden 'Tarihi Mekanlar' veri setinden alınmıştır. Görseller ve mekan açıklamaları benim tarafımdan eklenip düzenlenmiştir. Google maps api ile çekilen koordinatlar da Açık Yeşil platformundaki 'Tarih Mekanlar' veri setinden çekilmiştir.

Açık yeşil platformunda verileri api ile çekilmeye çalışıldı fakat api izinleri ve güvenliği sebebiyle CORS hatası alındı.
Bu sebeple veri setleri projeye indirilerek CSV dosyasından Papa Parse kütüphanesiyle JSON'a çevirilerek projede kullanıldı.

Vercel domain adresi:

bursa-kultur-etkinlik.vercel.app
