import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import img1 from '../imgs/one swiper imgs/bg11.jpg'
import img2 from '../imgs/one swiper imgs/bg33.png'
import img3 from '../imgs/one swiper imgs/bg22.jpg'


export default function OneSwiper() {
const {t} = useTranslation();
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper mt-[70px]"
      >
        <SwiperSlide className='relative flex h-[400px] md:h-full w-full object-contain'>
            <img className='-z-10 absolute inset-0' src={img1} alt="" />
        
            <h2 className='m-auto mt-[250px] text-center flex items-center inset-0 absolute z-10 h-[200px] max-w-[600px] text-white leading-[1.2] bg-[#00000046]  text-[20px] md:text-[35px] rounded-[20px] font-bold'>{t('text1')}</h2>
            
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
            
            <h2 className='m-auto mt-[250px] text-center flex items-center inset-0 absolute z-10 h-[200px] max-w-[600px] text-white leading-[1.2] bg-[#00000046]  text-[20px] md:text-[35px] rounded-[20px] font-bold'>{t('text2')}</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
            <h2 className='m-auto mt-[250px] text-center flex items-center inset-0 absolute z-10 h-[200px] max-w-[600px] text-white leading-[1.2] bg-[#00000046]  text-[20px] md:text-[35px] rounded-[20px] font-bold'>{t('text3')}</h2>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}



