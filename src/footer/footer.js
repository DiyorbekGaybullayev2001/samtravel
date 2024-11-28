
import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify'; //toastify alerni bir turi
import 'react-toastify/dist/ReactToastify.css';


AOS.init();

const Footer = () => {
  const {t} = useTranslation()
  const notify = () => toast("Wow so easy!");


  const [loading, setloading] = useState(false);

  const SendMessage = (event) => {
    event.preventDefault();
    setloading(true)
    const token = "7544516110:AAGpvVlT-sJKDRfy0XL7mZJI6HnfyzIvl7w"
    const chatId = 6079644484;
    const url = `https://api.telegram.org/bot${token}/sendMessage `
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const tel = document.getElementById("tel").value;
    const texts = document.getElementById("texts").value;

    const messages = `Name : ${name} \n Surname: ${surname} \n TEL: ${tel} \n Texts: ${texts}`
    axios({
      url:url,
      method:'POST',
      data:{
        "chat_id":chatId,
        "text":messages
      }
    }).then((res)=>{
      document.getElementById("formID").reset();
      // alert("Yuborildi")
    }).catch((error)=>{
      console.log("Error" , error);
    }).finally(()=>{
      setloading(false)
    })
  }

  // const [formData, setFormData] = useState({
  //   ism: "",
  //   familiya: "",
  //   telefon: "",
  //   izohlar: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Yuborilgan ma'lumotlar:", formData);
  //   alert("Arizangiz yuborildi!");
  // };

  return (
    <div className="bg-black w-full py-10 overflow-hidden" >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Aloqa bo'limi */}
        <div className="text-white ml-[10px]">
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="50"
            className="text-4xl lg:text-5xl font-bold"
          >
            {t('aloqa')}
          </h1>
          <span
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="50"
            className="block w-16 h-1 bg-red-500 mt-2"
          ></span>

          <h2 className="mt-5 text-xl">{t('aloqa2')}</h2>
          <a
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="50"
            className="block hover:text-red-500 mt-2"
            href="tel:+998997126666"
          >
            +998 99 712 66 66
          </a>
          <a
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="50"
            className="block hover:text-red-500 mt-2"
            href="tel:+998974839999"
          >
            +998 97 483 99 99
          </a>

          <h2 className="mt-5 text-xl">{t('tarmoq')}</h2>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="50"
            className="flex items-center mt-3"
          >
            <FaInstagram className="text-red-500 w-9 h-9" />
            <a
              className="ml-3 text-sm hover:text-red-500"
              href="https://www.instagram.com/easy.visa.uzb"
            >
              Easy Viza Uzb
            </a>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="50"
            className="flex items-center mt-3"
          >
            <FaTelegramPlane className="text-red-500 w-9 h-9" />
            <a
              className="ml-3 text-sm hover:text-red-500"
              href="https://t.me/Ataev_Bakhodir90"
            >
              t.me/Ataev_Bakhodir90
            </a>
            {/* <a
              className="ml-3 text-sm hover:text-red-500"
              href="https://t.me/sevaraataeva1986"
            >
              t.me/sevaraataeva1986
            </a> */}
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="50"
            className="flex items-center mt-3"
          >
            <SiTelegram className="text-red-500 w-9 h-9" />
            <a
              className="ml-3 text-sm hover:text-red-500"
              href="https://t.me/easyvizatourconsulting"
            >
              t.me/Easy viza tour
            </a>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="50"
            className="flex items-center mt-3"
          >
            <IoLocationSharp className="text-red-500 w-9 h-9" />
            <span className="ml-3 text-sm hover:text-red-500">
              {t('locat')}
            </span>
          </div>
        </div>

        {/* Xarita bo'limi */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="flex justify-center p-[15px]"
        >
          <iframe
            src="https://yandex.uz/map-widget/v1/?ll=69.673404%2C41.151715&mode=whatshere&whatshere%5Bpoint%5D=69.672223%2C41.151495&whatshere%5Bzoom%5D=17&z=18.43"
            width="100%"
            height="400"
            frameBorder="1"
            allowFullScreen
            title="Xarita"
            className="rounded-md shadow-lg"
          ></iframe>
        </div>

        {/* Ariza yuborish formasi */}
        <div id="contact">
          <form
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="50"
            className="text-white p-6 rounded-md"
            onSubmit={SendMessage}
            id="formID"
          >
            <h2 className="text-3xl font-bold mb-4">{t('ariza')}</h2>
            <div className="mb-4">
              <input
                type="text"
                name="ism"
                id="name"
                // value={formData.ism}
                // onChange={handleChange}
                placeholder="Name"
                required
                className="w-full p-3 bg-white text-black rounded-md border focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="familiya"
                id="surname"
                // value={formData.familiya}
                // onChange={handleChange}
                placeholder="Surname"
                className="w-full p-3 bg-white text-black rounded-md border focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                name="telefon"
                id="tel"
                // value={formData.telefon}
                // onChange={handleChange}
                placeholder="Tel:"
                className="w-full p-3 bg-white text-black rounded-md border focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="izohlar"
                id="texts"
                // value={formData.izohlar}
                // onChange={handleChange}
                placeholder="Text"
                rows="4"
                className="w-full p-3 bg-white text-black rounded-md border focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            <button
              onClick={notify}
              type="submit" 
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md transition"> { loading ? t('submit') : t('ariza') } </button>
              <ToastContainer/> 
              {/* alerni bir turi , bir chekkadan chiqib kelishi */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;



















// import React, { useState } from "react";
// import { FaInstagram } from "react-icons/fa6";
// import { FaTelegramPlane } from "react-icons/fa";
// import { SiTelegram } from "react-icons/si";
// import { IoLocationSharp } from "react-icons/io5";

// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles// ..
// AOS.init();

// const Footer = () =>{

//     const [formData, setFormData] = useState({
//         ism: "",
//         familiya: "",
//         telefon: "",
//         izohlar: "",
//       });
    
//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//       };
    
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Yuborilgan ma'lumotlar:", formData);
//         alert("Arizangiz yuborildi!");
//       };

//     return(
//         <div className="bg-black w-full h-[700px]">

//             <div className=" container m-auto grid grid-cols-3 gap-2 ">

//                 <div className="text-white">
//                     <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className='text-[50px] text-white font-bold'>Aloqa</h1>
//                     <span data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className='w-[60px] h-[5px] bg-[red] block mt-[10px]'></span>
//                     <h2 className="mt-[20px] text-[30px]">Ulanish uchun:</h2><br />
//                     <a data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className="hover:text-[red]" href="tel:+998997126666">+998 99 712 66 66</a>
//                     <br />
//                     <a data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className="hover:text-[red]" href="tel:+998974839999">+998 97 483 99 99</a>
//                     <br />
//                     <h2 className="mt-[20px] text-[30px]">Ijtimoiy tarmoqlar</h2>
//                     <br />

//                     <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className="flex items-center">
//                         <FaInstagram className="text-[red] h-[35px] w-[35px]"/>
//                         <a className="hover:text-[red] ml-[10px] text-[17px]" href="https://www.instagram.com/easy.visa.uzb">Easy Viza Uzb</a>
//                     </div>
//                     <br />

//                     <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className="flex items-center">
//                         <FaTelegramPlane className="text-[red] h-[35px] w-[35px]"/>
//                         <a className="hover:text-[red] ml-[10px] text-[17px]" href="https://t.me/Ataev_Bakhodir90"> t.me/Ataev_Bakhodir90</a>
//                         <a className="hover:text-[red] ml-[10px] text-[17px]" href="https://t.me/sevaraataeva1986"> t.me/sevaraataeva1986</a>
//                     </div>
//                     <br />

//                     <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className="flex items-center">
//                         <SiTelegram className="text-[red] h-[35px] w-[35px]"/>
//                         <a className="hover:text-[red] ml-[10px] text-[17px]" href="https://t.me/easyvizatourconsulting"> t.me/Easy viza tour</a>
//                     </div>
//                     <br />

//                     <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className="flex items-center">
//                         <IoLocationSharp className="text-[red] h-[35px] w-[35px]"/>
//                         <span className="hover:text-[red] ml-[10px] text-[17px] cursor-pointer" href="">Toshkent, Mustaqillik ko'chasi, 59</span>
//                     </div>
//                 </div>
                

//                 <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
//                 <div className="position:relative;overflow:hidden;"><a href="https://yandex.uz/maps?utm_medium=mapframe&utm_source=maps" className="color:#eee;font-size:12px;position:absolute;top:0px;">Яндекс Карты</a><a href="https://yandex.uz/maps/?ll=69.673404%2C41.151715&mode=whatshere&utm_medium=mapframe&utm_source=maps&whatshere%5Bpoint%5D=69.672223%2C41.151495&whatshere%5Bzoom%5D=17&z=18.43" className="color:#eee;font-size:12px;position:absolute;top:14px;">41.151495,69.672223 — Яндекс Карты</a><iframe src="https://yandex.uz/map-widget/v1/?ll=69.673404%2C41.151715&mode=whatshere&whatshere%5Bpoint%5D=69.672223%2C41.151495&whatshere%5Bzoom%5D=17&z=18.43" width="500" height="500" frameborder="1" allowfullscreen="true" className="position:relative;"></iframe></div>
//                 </div>
                

//                 <div className="h-[500px]">
                    
//                 <div className="flex items-center justify-center ">
//       <form
//         className=" text-white w-full max-w-md p-6"
//         onSubmit={handleSubmit}
//       >
//         <h2 className="text-[35px] font-bold mb-4">Ariza yuborish</h2>
//         <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="50" className="mb-4">
//           <input
//             type="text"
//             name="ism"
//             value={formData.ism}
//             onChange={handleChange}
//             placeholder="Ism"
//             required
//             className="w-full p-3 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"/>
//         </div>
//         <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="50" className="mb-4">
//           <input
//             type="text"
//             name="familiya"
//             value={formData.familiya}
//             onChange={handleChange}
//             placeholder="Familiya"
//             className="w-full p-3 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"/>
//         </div>
//         <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="50" className="mb-4">
//           <input
//             type="number"
//             name="telefon"
//             value={formData.telefon}
//             onChange={handleChange}
//             placeholder="Telefon"
//             className="w-full p-3 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"/>
//         </div>
//         <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="50" className="mb-4">
//           <textarea
//             name="izohlar"
//             value={formData.izohlar}
//             onChange={handleChange}
//             placeholder="Izohlar"
//             rows="4"
//             className="w-full p-3 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"/>
//         </div>
//         <button data-aos="fade-left" data-aos-duration="1000" data-aos-delay="50"
//           type="submit"
//           className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md transition duration-200">
//           Ariza yuborish
//         </button>
//       </form>
//     </div>

//                 </div>

//             </div>

//         </div>
//     )
// }

// export default Footer

