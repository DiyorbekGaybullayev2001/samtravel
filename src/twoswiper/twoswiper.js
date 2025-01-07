import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import img1 from '../imgs/two swiper imgs/popular-1.jpg'
import img2 from '../imgs/two swiper imgs/popular-2.jpg'
import img3 from '../imgs/two swiper imgs/popular-3.jpg'
import img4 from '../imgs/two swiper imgs/popular-4.jpg'
import img5 from '../imgs/two swiper imgs/popular-5.jpg'
import img6 from '../imgs/two swiper imgs/popular-6.jpg'
import img7 from '../imgs/two swiper imgs/popular-7.jpg'
import { useTranslation } from 'react-i18next';

export default function TwoSwiper() {

  const {t} = useTranslation()
  
  // const {t , i18n} = useTranslation
  // const handlechange = (event) =>{

  // }

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
        <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className='m-auto container pt-[80px]'>
            <h1 className='text-[30px] md:text-[50px] text-black font-bold'>{t('Ommabop')}</h1>
            <span className='w-[60px] h-[6px] bg-[red] block'></span>
        </div>
        <br />

        <div className='h-[500px] ' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">

        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="img" />
        </SwiperSlide>
        
        
        <div className="autoplay-progress bg-black" slot="container-end">
          <svg className='bg-black text-[red]'  viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
        </div>
    </>
  );
}


// import React from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// // import 'swiper/css';
// // import 'swiper/css/pagination';

// // Import required modules
// import { Pagination } from 'swiper/modules';

// import img1 from '../imgs/two swiper imgs/popular-1.jpg';
// import img2 from '../imgs/two swiper imgs/popular-2.jpg';
// import img3 from '../imgs/two swiper imgs/popular-3.jpg';
// import img4 from '../imgs/two swiper imgs/popular-4.jpg';
// import img5 from '../imgs/two swiper imgs/popular-5.jpg';
// import img6 from '../imgs/two swiper imgs/popular-6.jpg';
// import img7 from '../imgs/two swiper imgs/popular-7.jpg';

// export default function TwoSwiper() {
//   return (
//     <>
//       {/* Title Section */}
//       <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className='ml-[200px] container mt-[80px]'>
//         <h1 className='text-[50px] text-black font-bold'>Ommabop</h1>
//         <span className='w-[60px] h-[6px] bg-[red] block'></span>
//       </div>
//       <br />

//       {/* Swiper Section */}
//       <Swiper
//         data-aos="fade-up"
//         data-aos-duration="1000"
//         data-aos-delay="200"
//         slidesPerView={3}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src={img1} alt="Popular Destination 1" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img2} alt="Popular Destination 2" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img3} alt="Popular Destination 3" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img4} alt="Popular Destination 4" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img5} alt="Popular Destination 5" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img6} alt="Popular Destination 6" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img7} alt="Popular Destination 7" />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
