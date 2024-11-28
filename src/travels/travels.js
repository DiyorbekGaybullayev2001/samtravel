import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { EffectCards } from 'swiper/modules';
import travelbg from '../imgs/work-bg.png'

import travel1 from '../imgs/travels imgs/travel1.jpg'
import travel2 from '../imgs/travels imgs/travel2.jpg'
import travel3 from '../imgs/travels imgs/travel3.jpg'
import travel4 from '../imgs/travels imgs/travel4.jpg'
import travel5 from '../imgs/travels imgs/travel5.jpg'
import travel6 from '../imgs/travels imgs/travel6.jpg'

const Travels = () => {
  const {t} = useTranslation()
    // const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return(
        <div className=" w-full h-[600px] md:h-[1000px]  mt-[80px] relative" >
            <img className="w-full h-full absolute -z-10" src={travelbg} alt="" />

            <div className="container m-auto">
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className="absolute mt-[30px]">
                    <h1 className='text-[30px] md:text-[50px] text-white font-bold'>{t('travels')}</h1>
                    <span className='w-[60px] h-[5px] bg-[red] block mt-[10px]'></span>
                </div>
                
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50" className=' mt-[150px] w-[100%] h-[400px] md:h-[600px] absolute container'>

  
                <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={travel1} alt="travelimgs" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={travel2} alt="travelimgs" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={travel3} alt="travelimgs" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={travel4} alt="travelimgs" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={travel5} alt="travelimgs" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={travel6} alt="travelimgs" />
        </SwiperSlide>
      </Swiper>              

                 
                {/* <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide className='h-[300px]'>
          <img className='object-cover' src={travel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='object-cover' src={travel2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='object-cover' src={travel3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='object-cover' src={travel4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='object-cover' src={travel5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='object-cover' src={travel6} alt="" />
        </SwiperSlide>
      </Swiper>

      <div className='container h-[200px] w-[100%] absolute '>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide >
            <img className='h-[30px] object-cover' src={travel1} alt="" />
        </SwiperSlide>
        <SwiperSlide >
            <img className='h-[30px] ' src={travel2} alt="" />
        </SwiperSlide>
        <SwiperSlide >
            <img className='h-[30px]' src={travel3} alt="" />
        </SwiperSlide>
        <SwiperSlide >
            <img className='h-[30px]' src={travel4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='h-[30px]' src={travel5} alt="" />
        </SwiperSlide>
        <SwiperSlide >
            <img className='h-[30px]' src={travel6} alt="" />
        </SwiperSlide>
      </Swiper>
      </div> */}
                </div>

            </div>

        </div>
    )
}

export default Travels





// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
// import { useTranslation } from 'react-i18next';
// import AOS from 'aos';

// // Swiper va AOS CSS
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';
// import 'aos/dist/aos.css';

// // Rasmlar
// import travelbg from '../imgs/work-bg.png';

// import travel1 from '../imgs/travels_imgs/travel1.jpg';
// import travel2 from '../imgs/travels_imgs/travel2.jpg';
// import travel3 from '../imgs/travels_imgs/travel3.jpg';
// import travel4 from '../imgs/travels_imgs/travel4.jpg';
// import travel5 from '../imgs/travels_imgs/travel5.jpg';
// import travel6 from '../imgs/travels_imgs/travel6.jpg';

// const Travels = () => {
//   const { t } = useTranslation();
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   useEffect(() => {
//     AOS.init(); // AOS animatsiyalarini ishga tushirish
//   }, []);

//   const travelImages = [travel1, travel2, travel3, travel4, travel5, travel6];

//   return (
//     <div className="w-full h-[900px] mt-[80px] relative">
//       {/* Background */}
//       <img className="w-full h-full absolute -z-10" src={travelbg} alt="Background" />

//       <div className="container m-auto">
//         {/* Sarlavha */}
//         <div data-aos="fade-right" data-aos-duration="1000" className="absolute mt-[30px]">
//           <h1 className="text-[30px] md:text-[50px] text-white font-bold">{t('travels')}</h1>
//           <span className="w-[60px] h-[5px] bg-[red] block mt-[10px]"></span>
//         </div>

//         {/* Slayder */}
//         <div
//           data-aos="fade-up"
//           data-aos-duration="1000"
//           className="mt-[150px] h-[500px] absolute container object-contain"
//         >
//           {/* Asosiy Slayder */}
//           <Swiper
//             style={{
//               '--swiper-navigation-color': '#fff',
//               '--swiper-pagination-color': '#fff',
//             }}
//             spaceBetween={10}
//             navigation={true}
//             thumbs={{ swiper: thumbsSwiper }}
//             modules={[FreeMode, Navigation, Thumbs]}
//             className="mySwiper2"
//           >
//             {travelImages.map((img, index) => (
//               <SwiperSlide key={index}>
//                 <img className="w-full h-[500px] object-cover" src={img} alt={`Travel ${index + 1}`} />
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Thumb Slayder */}
//           <div className="container h-[200px] w-[100%] absolute">
//             <Swiper
//               onSwiper={setThumbsSwiper}
//               spaceBetween={10}
//               slidesPerView={3}
//               freeMode={true}
//               watchSlidesProgress={true}
//               modules={[FreeMode, Navigation, Thumbs]}
//               className="mySwiper"
//             >
//               {travelImages.map((img, index) => (
//                 <SwiperSlide key={index}>
//                   <img className="h-[80px] w-[100px] object-cover" src={img} alt={`Thumbnail ${index + 1}`} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Travels;
