import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Services() {
  const {t} = useTranslation()

  const [activeTab, setActiveTab] = useState("turistik");

  return (
    <div id="services" className="pt-[80px] container m-auto ">
        <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className='text-[30px] md:text-[50px] text-black font-bold'>{t('services')}</h1>
        <span data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className='w-[60px] h-[6px] bg-[red] block'></span>
      {/* Bo'lim tugmalari */}
      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50" className="mt-[50px] flex justify-center gap-10 flex-wrap" style={{ marginBottom: "20px" }}>
        <button className="rounded-[10px] hover:bg-gray-800"
          onClick={() => setActiveTab("maslahati")}
          style={{
            backgroundColor: activeTab === "maslahati" ? "red" : "black",
            color: "white",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {t('btn1')}
        </button>
        
        <button className="rounded-[10px]"
          onClick={() => setActiveTab("turistik")}
          style={{
            backgroundColor: activeTab === "turistik" ? "red" : "black",
            color: "white",
            padding: "10px 40px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {t('btn2')}
        </button>

        <button className="rounded-[10px]"
          onClick={() => setActiveTab("biznes")}
          style={{
            backgroundColor: activeTab === "biznes" ? "red" : "black",
            color: "white",
            padding: "10px 40px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {t('btn3')}
        </button>

        <button className="rounded-[10px]"
          onClick={() => setActiveTab("tayyorlash")}
          style={{
            backgroundColor: activeTab === "tayyorlash" ? "red" : "black",
            color: "white",
            padding: "10px 40px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {t('btn4')}
        </button>

        <button className="rounded-[10px]"
          onClick={() => setActiveTab("paketlari")}
          style={{
            backgroundColor: activeTab === "paketlari" ? "red" : "black",
            color: "white",
            padding: "10px 40px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {t('btn5')}
        </button>

        <button className="rounded-[10px]"
          onClick={() => setActiveTab("sugurta")}
          style={{
            backgroundColor: activeTab === "sugurta" ? "red" : "black",
            color: "white",
            padding: "10px 40px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {t('btn6')}
        </button>
      </div>


      {/* Faol bo'lim mazmuni */}
      <div className="container m-auto w-[70%]" style={{ textAlign: "center", fontSize: "20px" }}>
      <span className='w-[6px] h-[60px] bg-[red] block mb-[10px]'></span>

        {activeTab === "maslahati" && <p>{t('btnp1')}</p>}

        {activeTab === "turistik" && ( <p>{t('btnp2')}</p>)}

        {activeTab === "biznes" && <p>{t('btnp3')}</p>}

        {activeTab === "tayyorlash" && <p>{t('btnp4')}</p>}

        {activeTab === "paketlari" && <p>{t('btnp5')}</p>}

        {activeTab === "sugurta" && <p>{t('btnp6')}</p>}

      </div>
    </div>
  );
}

export default Services;














// import React, { useState } from "react";

// function Services() {
//   const [activeTab, setActiveTab] = useState("turistik");

//   return (
//     <div className="mt-20 container mx-auto">
//       {/* Xizmatlar sarlavhasi */}
//       <h1
//         data-aos="fade-right"
//         data-aos-duration="1000"
//         data-aos-delay="50"
//         className="text-4xl lg:text-5xl text-black font-bold text-center"
//       >
//         Xizmatlar
//       </h1>
//       <span
//         data-aos="fade-right"
//         data-aos-duration="1000"
//         data-aos-delay="50"
//         className="w-16 h-1 bg-red-500 block mx-auto mt-4"
//       ></span>

//       {/* Tugmalar bo'limi */}
//       <div
//         data-aos="zoom-in"
//         data-aos-duration="1000"
//         data-aos-delay="50"
//         className="mt-12 flex flex-wrap justify-center gap-4"
//       >
//         {[
//           { id: "maslahati", label: "Viza Maslahati" },
//           { id: "turistik", label: "Turistik Vizalar" },
//           { id: "biznes", label: "Biznes Vizalar" },
//           { id: "tayyorlash", label: "Hujjatlarni Tayyorlash" },
//           { id: "paketlari", label: "Sayohat Paketlari" },
//           { id: "sugurta", label: "Sug'urta" },
//         ].map((tab) => (
//           <button
//             key={tab.id}
//             className={`rounded-lg px-6 py-2 font-semibold transition-colors duration-300 ${
//               activeTab === tab.id ? "bg-red-500" : "bg-black"
//             } text-white hover:bg-gray-800`}
//             onClick={() => setActiveTab(tab.id)}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* Mazmun bo'limi */}
//       <div className="mt-10 w-11/12 md:w-8/12 mx-auto text-center text-lg">
//         <span className="w-1 h-14 bg-red-500 block mx-auto mb-4"></span>
//         {activeTab === "maslahati" && (
//           <p>
//             EASY VISA CONSULTING mutaxassislari Shengen, Kanada, AQSH, Buyuk Britaniya, Yaponiya va Koreya kabi
//             davlatlar uchun viza arizalari bo'yicha batafsil maslahatlar taqdim etadi. Biz hujjatlarni taqdim
//             etishning barcha nozik tomonlarini tushuntiramiz va jarayonga tayyorgarlik ko'rishda yordam beramiz.
//           </p>
//         )}
//         {activeTab === "turistik" && (
//           <p>
//             Biz Evropa, Shimoliy Amerika va Osiyoga mashhur davlatlarga qulay sayohat uchun turistik vizalarni
//             olishda yordam beramiz. Bizning mutaxassislarimiz har bir bosqichda to'liq yordam ko'rsatadi.
//           </p>
//         )}
//         {activeTab === "biznes" && (
//           <p>
//             Biznes safarlari uchun EASY VISA CONSULTING dunyoning yetakchi davlatlariga viza olish bo'yicha
//             kompleks echimlar taqdim etadi. Biz hujjatlarni tez va professional tarzda taqdim etishni ta'minlaymiz.
//           </p>
//         )}
//         {activeTab === "tayyorlash" && (
//           <p>
//             Biz barcha hujjatlaringizni diqqat bilan tekshiramiz, ularning viza markazlari talablariga mos kelishini
//             ta'minlaymiz. Shuningdek, vizani muvaffaqiyatli olish uchun zarur bo'lgan sertifikatlar va ma'lumotlarni
//             yig'ishga yordam beramiz.
//           </p>
//         )}
//         {activeTab === "paketlari" && (
//           <p>
//             Biz sizning dam olishingizni maksimal darajada qulay qilish uchun sayohatlarni tashkil etish,
//             mehmonxonalarni bron qilish va ekskursiyalarni o'z ichiga olgan eng maqbul sayohat paketlarini
//             tanlashni taklif etamiz.
//           </p>
//         )}
//         {activeTab === "sugurta" && (
//           <p>
//             Biz sizni va yaqinlaringizni sayohat davomida himoya qiladigan, har qanday vaziyatda xavfsizlik va
//             ishonchni ta'minlaydigan sayohat sug'urtasini tashkil etamiz.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Services;

