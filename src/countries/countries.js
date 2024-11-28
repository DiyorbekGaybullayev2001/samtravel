import React from 'react'
import { useTranslation } from 'react-i18next'

import flag1 from '../imgs/countries imgs/flag-1.jpg'
import flag2 from '../imgs/countries imgs/flag-2.jpg'
import flag3 from '../imgs/countries imgs/flag-3.jpg'
import flag4 from '../imgs/countries imgs/flag-4.jpg'
import flag5 from '../imgs/countries imgs/flag-5.jpg'
import flag6 from '../imgs/countries imgs/flag-6.jpg'
import flag7 from '../imgs/countries imgs/flag-7.jpg'
import flag8 from '../imgs/countries imgs/flag-8.jpg'
import flag9 from '../imgs/countries imgs/flag-9.jpg'

import services1 from '../imgs/countries imgs/services-1.jpg'
import services2 from '../imgs/countries imgs/services-2.jpg'
import services3 from '../imgs/countries imgs/services-3.jpg'
import services4 from '../imgs/countries imgs/services-4.jpg'
import services5 from '../imgs/countries imgs/services-5.jpg'
import services6 from '../imgs/countries imgs/services-6.jpg'
import services7 from '../imgs/countries imgs/services-7.jpg'
import services8 from '../imgs/countries imgs/services-8.jpg'
import services9 from '../imgs/countries imgs/services-9.jpg'

const Countries = () =>{

    const {t} = useTranslation()

    return(
        <div id='countries' className='container m-auto pt-[80px]' >
            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className='text-[30px] md:text-[50px] text-black font-bold'>{t('countries')}</h1>
            <span data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className='w-[60px] h-[6px] bg-[red] block'></span>
            <br />
            <div className='container m-auto w-[100%] h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
                
                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50" className=' m-auto border-[4px] border-t-0 border-l-0 border-r-0 border-[red] h-[100%] w-[280px] sm:w-[350px] hover:cursor-pointer '>
                    <div className='h-[232px] w-[280px] sm:w-[350px] overflow-hidden rounded-tl-[35px] rounded-tr-[35px]'>
                        <img className=' w-full h-full rounded-tl-[35px] rounded-tr-[35px] hover:scale-[1.3] duration-700 ' src={services1} alt="" />
                    </div>
                    <div className='flex bg-[#fafafa] m-auto'>
                        <div className='text-black block font-bold text-[20px] sm:text-[25px] ml-[40px] sm:ml-[80px] mt-[15px]'>{t('countr1')}</div>
                        <img className='h-[40px] w-[60px] sm:h-[50px] sm:w-[80px] mt-[10px] ml-[50px] rounded-[20px] mb-2' src={flag1} alt="" />
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50" className=' m-auto border-[4px] border-t-0 border-l-0 border-r-0 border-[red] h-[100%] w-[280px] sm:w-[350px] hover:cursor-pointer '>
                    <div className='h-[232px] w-[280px] sm:w-[350px] overflow-hidden rounded-tl-[35px] rounded-tr-[35px]'>
                        <img className=' w-full h-full rounded-tl-[35px] rounded-tr-[35px] hover:scale-[1.3] duration-700 ' src={services2} alt="" />
                    </div>
                    <div className='flex bg-[#fafafa] m-auto'>
                        <div className='text-black block font-bold text-[20px] sm:text-[25px] ml-[40px] sm:ml-[80px] mt-[15px]'>{t('countr2')}</div>
                        <img className='h-[40px] w-[60px] sm:h-[50px] sm:w-[80px] mt-[10px] ml-[50px] rounded-[20px] mb-2' src={flag2} alt="" />
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50" className=' m-auto border-[4px] border-t-0 border-l-0 border-r-0 border-[red] h-[100%] w-[280px] sm:w-[350px] hover:cursor-pointer '>
                    <div className='h-[232px] w-[280px] sm:w-[350px] overflow-hidden rounded-tl-[35px] rounded-tr-[35px]'>
                        <img className=' w-full h-full rounded-tl-[35px] rounded-tr-[35px] hover:scale-[1.3] duration-700 ' src={services3} alt="" />
                    </div>
                    <div className='flex bg-[#fafafa] m-auto'>
                        <div className='text-black block font-bold text-[20px] sm:text-[25px] ml-[40px] sm:ml-[80px] mt-[15px]'>{t('countr3')}</div>
                        <img className='h-[40px] w-[60px] sm:h-[50px] sm:w-[80px] mt-[10px] ml-[50px] rounded-[20px] mb-2' src={flag3} alt="" />
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50" className=' m-auto border-[4px] border-t-0 border-l-0 border-r-0 border-[red] h-[100%] w-[280px] sm:w-[350px] hover:cursor-pointer '>
                    <div className='h-[232px] w-[280px] sm:w-[350px] overflow-hidden rounded-tl-[35px] rounded-tr-[35px]'>
                        <img className=' w-full h-full rounded-tl-[35px] rounded-tr-[35px] hover:scale-[1.3] duration-700 ' src={services4} alt="" />
                    </div>
                    <div className='flex bg-[#fafafa] m-auto'>
                        <div className='text-black block font-bold text-[20px] sm:text-[25px] ml-[40px] sm:ml-[80px] mt-[15px]'>{t('countr4')}</div>
                        <img className='h-[40px] w-[60px] sm:h-[50px] sm:w-[80px] mt-[10px] ml-[50px] rounded-[20px] mb-2' src={flag4} alt="" />
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50" className=' m-auto border-[4px] border-t-0 border-l-0 border-r-0 border-[red] h-[100%] w-[280px] sm:w-[350px] hover:cursor-pointer '>
                    <div className='h-[232px] w-[280px] sm:w-[350px] overflow-hidden rounded-tl-[35px] rounded-tr-[35px]'>
                        <img className=' w-full h-full rounded-tl-[35px] rounded-tr-[35px] hover:scale-[1.3] duration-700 ' src={services5} alt="" />
                    </div>
                    <div className='flex bg-[#fafafa] m-auto'>
                        <div className='text-black block font-bold text-[20px] sm:text-[25px] ml-[40px] sm:ml-[80px] mt-[15px]'>{t('countr5')}</div>
                        <img className='h-[40px] w-[60px] sm:h-[50px] sm:w-[80px] mt-[10px] ml-[50px] rounded-[20px] mb-2' src={flag5} alt="" />
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50" className=' m-auto border-[4px] border-t-0 border-l-0 border-r-0 border-[red] h-[100%] w-[280px] sm:w-[350px] hover:cursor-pointer '>
                    <div className='h-[232px] w-[280px] sm:w-[350px] overflow-hidden rounded-tl-[35px] rounded-tr-[35px]'>
                        <img className=' w-full h-full rounded-tl-[35px] rounded-tr-[35px] hover:scale-[1.3] duration-700 ' src={services6} alt="" />
                    </div>
                    <div className='flex bg-[#fafafa] m-auto'>
                        <div className='text-black block font-bold text-[20px] sm:text-[25px] ml-[40px] sm:ml-[80px] mt-[15px]'>{t('countr6')}</div>
                        <img className='h-[40px] w-[60px] sm:h-[50px] sm:w-[80px] mt-[10px] ml-[50px] rounded-[20px] mb-2' src={flag6} alt="" />
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50" className=' m-auto border-[4px] border-t-0 border-l-0 border-r-0 border-[red] h-[100%] w-[280px] sm:w-[350px] hover:cursor-pointer '>
                    <div className='h-[232px] w-[280px] sm:w-[350px] overflow-hidden rounded-tl-[35px] rounded-tr-[35px]'>
                        <img className=' w-full h-full rounded-tl-[35px] rounded-tr-[35px] hover:scale-[1.3] duration-700 ' src={services7} alt="" />
                    </div>
                    <div className='flex bg-[#fafafa] m-auto'>
                        <div className='text-black block font-bold text-[20px] sm:text-[25px] ml-[40px] sm:ml-[80px] mt-[15px]'>{t('countr7')}</div>
                        <img className='h-[40px] w-[60px] sm:h-[50px] sm:w-[80px] mt-[10px] ml-[50px] rounded-[20px] mb-2' src={flag7} alt="" />
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50" className=' m-auto border-[4px] border-t-0 border-l-0 border-r-0 border-[red] h-[100%] w-[280px] sm:w-[350px] hover:cursor-pointer '>
                    <div className='h-[232px] w-[280px] sm:w-[350px] overflow-hidden rounded-tl-[35px] rounded-tr-[35px]'>
                        <img className=' w-full h-full rounded-tl-[35px] rounded-tr-[35px] hover:scale-[1.3] duration-700 ' src={services8} alt="" />
                    </div>
                    <div className='flex bg-[#fafafa] m-auto'>
                        <div className='text-black block font-bold text-[20px] sm:text-[25px] ml-[40px] sm:ml-[80px] mt-[15px]'>{t('countr8')}</div>
                        <img className='h-[40px] w-[60px] sm:h-[50px] sm:w-[80px] mt-[10px] ml-[50px] rounded-[20px] mb-2' src={flag8} alt="" />
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50" className=' m-auto border-[4px] border-t-0 border-l-0 border-r-0 border-[red] h-[100%] w-[280px] sm:w-[350px] hover:cursor-pointer '>
                    <div className='h-[232px] w-[280px] sm:w-[350px] overflow-hidden rounded-tl-[35px] rounded-tr-[35px]'>
                        <img className=' w-full h-full rounded-tl-[35px] rounded-tr-[35px] hover:scale-[1.3] duration-700 ' src={services9} alt="" />
                    </div>
                    <div className='flex bg-[#fafafa] m-auto'>
                        <div className='text-black block font-bold text-[20px] sm:text-[25px] ml-[40px] sm:ml-[80px] mt-[15px]'>{t('countr9')}</div>
                        <img className='h-[40px] w-[60px] sm:h-[50px] sm:w-[80px] mt-[10px] ml-[50px] rounded-[20px] mb-2' src={flag9} alt="" />
                    </div>
                </div>
                
               


            </div>
        </div>
    )
}

export default Countries


// import React from 'react';

// const Countries = () => {
//     return (
//         <div id="countries" className="container m-auto mt-[80px]">
//             <h1
//                 data-aos="fade-right"
//                 data-aos-duration="1000"
//                 data-aos-delay="50"
//                 className="text-[50px] text-black font-bold"
//             >
//                 Mamlakatlar
//             </h1>
//             <span
//                 data-aos="fade-right"
//                 data-aos-duration="1000"
//                 data-aos-delay="50"
//                 className="w-[60px] h-[6px] bg-[red] block"
//             ></span>
//             <br />
//             <div className="container m-auto w-[1400px] h-full grid grid-cols-3 gap-4">
//                 {countries.map((country, index) => (
//                     <div
//                         key={index}
//                         data-aos="zoom-in"
//                         data-aos-duration="1000"
//                         data-aos-delay="50"
//                         className="m-auto border-[4px] border-t-0 border-l-0 border-r-0 border-[red] h-[100%] w-[350px] hover:cursor-pointer"
//                     >
//                         <div className="h-[232px] w-[350px] overflow-hidden rounded-tl-[35px] rounded-tr-[35px]">
//                             <img
//                                 className="w-full h-full rounded-tl-[35px] rounded-tr-[35px] hover:scale-[1.3] duration-700"
//                                 src={country.image}
//                                 alt=""
//                             />
//                         </div>
//                         <div className="flex bg-[#fafafa]">
//                             <div className="text-black block font-bold text-[25px] ml-[80px] mt-[15px]">
//                                 {country.name}
//                             </div>
//                             <img
//                                 className="h-[50px] w-[80px] mt-[10px] ml-[50px] rounded-[20px] mb-2"
//                                 src={country.flag}
//                                 alt=""
//                             />
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// const countries = [
//     {
//         name: 'Shengen',
//         image: require('../imgs/countries imgs/services-1.jpg'),
//         flag: require('../imgs/countries imgs/flag-1.jpg'),
//     },
//     {
//         name: 'Kanada',
//         image: require('../imgs/countries imgs/services-2.jpg'),
//         flag: require('../imgs/countries imgs/flag-2.jpg'),
//     },
//     {
//         name: 'AQSH',
//         image: require('../imgs/countries imgs/services-3.jpg'),
//         flag: require('../imgs/countries imgs/flag-3.jpg'),
//     },
//     {
//         name: 'Britaniya',
//         image: require('../imgs/countries imgs/services-4.jpg'),
//         flag: require('../imgs/countries imgs/flag-4.jpg'),
//     },
//     {
//         name: 'Avstraliya',
//         image: require('../imgs/countries imgs/services-5.jpg'),
//         flag: require('../imgs/countries imgs/flag-5.jpg'),
//     },
//     {
//         name: 'Zelandiya',
//         image: require('../imgs/countries imgs/services-6.jpg'),
//         flag: require('../imgs/countries imgs/flag-6.jpg'),
//     },
//     {
//         name: 'Yaponiya',
//         image: require('../imgs/countries imgs/services-7.jpg'),
//         flag: require('../imgs/countries imgs/flag-7.jpg'),
//     },
//     {
//         name: 'Koreya',
//         image: require('../imgs/countries imgs/services-8.jpg'),
//         flag: require('../imgs/countries imgs/flag-8.jpg'),
//     },
//     {
//         name: 'Braziliya',
//         image: require('../imgs/countries imgs/services-9.jpg'),
//         flag: require('../imgs/countries imgs/flag-9.jpg'),
//     },
// ];

// export default Countries;


