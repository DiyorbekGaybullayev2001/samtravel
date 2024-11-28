import React from 'react';
import { useTranslation } from 'react-i18next';

import tourbg from '../imgs/turizm bg/prioritet-bg.png';
import numberbg from '../imgs/turizm bg/numbers-bg.png';

import { RxStopwatch } from "react-icons/rx";
import { BiSolidLock } from "react-icons/bi";
import { PiHandshake } from "react-icons/pi";
import { PiHandCoinsBold } from "react-icons/pi";

import CountUp from 'react-countup';


const Tourism = () =>{

  const {t} = useTranslation()

    return(
        <div className=' mt-[80px] m-auto text-center items-center'>

            <div className='w-[100%] h-full relative text-center m-auto'>
                <img className='w-full h-full absolute -z-10' src={tourbg} alt=""/>
                <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className='text-white text-center text-[30px] md:text-[60px] font-semibold'>{t('turizmh1')}</h1>
                <br />
                <span data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className='m-auto block h-[5px] w-[70px]  bg-[red]'></span>
                <br />
                <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50" className='text-white text-center w-[60%] m-auto text-[20px]'>{t('turizmp')}</p>
                
                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50" className=' m-auto container flex flex-wrap mt-[40px] text-center max-w-[1000px]'>
                    <div className=' m-auto'>
                      <RxStopwatch className='text-white w-[220px] h-[100px] m-[5px]'/>
                      <p className='text-white text-center mt-[10px]'>{t('turicon1')}</p>
                    </div>

                    <div className=' m-auto'>
                      <BiSolidLock className='text-white w-[220px] h-[100px] m-[5px]'/>
                      <p className='text-white text-center mt-[10px]'>{t('turicon2')}</p>
                    </div>

                    <div className=' m-auto'>
                      <PiHandshake className='text-white w-[220px] h-[100px] m-[5px]'/>
                      <p className='text-white text-center mt-[10px]'>{t('turicon3')}</p>
                    </div>

                    <div className=' m-auto'>
                      <PiHandCoinsBold className='text-white w-[220px] h-[100px] m-[5px]'/>
                      <p className='text-white text-center mt-[10px]'>{t('turicon4')}</p>
                    </div>
                </div>

                <div className='m-auto text-center h-full w-[80%] sm:w-[50%] relative mt-[100px] '>
                    <img className='absolute -z-10 h-full rounded-[30px]' src={numberbg} alt="" />
                    <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className='mt-[20px] text-[25px] absolute text-white xl:text-[50px] lg:text-[40px]  font-semibold m-auto h-[20px] w-full'>{t('numberh1')}</h1>
                    <br />
                    <span data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className='m-auto block h-[5px] w-[10%] mt-[40px] sm:mt-[80px]  bg-[#ffffff] '></span>

                      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50" className='flex flex-wrap justify-center'>

                        <div className='text-center m-[30px]'>
                          <CountUp enableScrollSpy={true} end={7320} duration={5} className='text-white text-[30px] md:text-[80px]  font-semibold'/><br />
                          <p className='text-white text-[20px] font-semibold'>{t('number1')}</p>
                        </div>

                        <div className='text-center m-[30px]'>
                          <CountUp enableScrollSpy={true} end={7257} duration={5} className='text-white text-[30px] md:text-[80px] font-semibold'/><br />
                          <p className='text-white text-[20px] font-semibold'>{t('number2')}</p>
                        </div>

                        <div  className='text-center m-[30px]'>
                          <CountUp enableScrollSpy={true} start={0} end={7250} duration={5} className='text-white text-[30px] md:text-[80px] font-semibold'/> <br />
                          <p className='text-white text-[20px] font-semibold'>{t('number3')}</p>
                        </div>
                       

                      </div>

                </div>

          </div>
                <span className='m-auto block h-[4px] w-[50%] mt-[50px]  bg-[#ff0f0f]'></span>

               
      
        </div>
    )
}
export default Tourism;



// import React from 'react';
// import tourbg from '../imgs/turizm bg/prioritet-bg.png';
// import numberbg from '../imgs/turizm bg/numbers-bg.png';

// import { RxStopwatch } from "react-icons/rx";
// import { BiSolidLock } from "react-icons/bi";
// import { PiHandshake } from "react-icons/pi";
// import { PiHandCoinsBold } from "react-icons/pi";

// import CountUp from 'react-countup';

// const Tourism = () => {
//     return (
//         <div className='mt-[80px] m-auto'>

//             {/* Priorities Section */}
//             <div className='w-[100%] h-[800px] relative'>
//                 <img className='w-full h-full absolute -z-10' src={tourbg} alt="" />
//                 <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className='text-white text-center text-[60px] font-semibold'>Turizm va Vizalarda Prioritetlar</h1>
//                 <br />
//                 <span data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className='m-auto block h-[5px] w-[70px] bg-[red]'></span>
//                 <br />
//                 <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50" className='text-white text-center w-[60%] m-auto text-[20px]'>
//                     Biz turist vizalarini rasmiylashtirishda yuqori darajada xizmat va ishonchlilikni ta'minlaymiz. Bizning jamoa turizm sohasida tajribaga ega va vizalarni olish bilan bog'liq muammolarni tezda hal qilishga tayyor. Biz mijozlarimizning sayohatlarini qulay va muammosiz qilish uchun har bir bosqichda—vizani tanlashdan tortib hujjatlarni olishgacha—qo'llab-quvvatlashni ta'minlaymiz.
//                 </p>

//                 <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50" className='m-auto container flex mt-[40px] text-center max-w-[1000px]'>
//                     <div className='m-[5px]'>
//                         <RxStopwatch className='text-white w-[250px] h-[150px]' />
//                         <p className='text-white text-center mt-[10px]'>Vaqtingizni Tejash</p>
//                     </div>

//                     <div className='m-[5px]'>
//                         <BiSolidLock className='text-white w-[250px] h-[150px]' />
//                         <p className='text-white text-center mt-[10px]'>Ishonchlilik</p>
//                     </div>

//                     <div className='m-[5px]'>
//                         <PiHandshake className='text-white w-[250px] h-[150px]' />
//                         <p className='text-white text-center mt-[10px]'>Qo'llab-quvvatlash</p>
//                     </div>

//                     <div className='m-[5px]'>
//                         <PiHandCoinsBold className='text-white w-[250px] h-[150px]' />
//                         <p className='text-white text-center mt-[10px]'>Qulaylik</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Statistics Section */}
//             <div className='m-auto h-[350px] w-[50%] relative mt-[-200px]'>
//                 <img className='absolute -z-10 h-full rounded-[30px]' src={numberbg} alt="" />
//                 <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className='absolute text-white text-[50px] font-semibold ml-[300px] h-[20px] w-full'>Biz Raqamlarda</h1>
//                 <br />
//                 <span data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className='m-auto block h-[5px] w-[70px] mt-[60px] bg-[#ffffff]'></span>

//                 <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50" className='flex justify-center'>
//                     <div className='text-center m-[30px]'>
//                         <CountUp enableScrollSpy={true} end={7320} duration={5} className='text-white text-[80px] font-semibold' /><br />
//                         <p className='text-white text-[20px] font-semibold'>Berilgan Vizalar</p>
//                     </div>

//                     <div className='text-center m-[30px]'>
//                         <CountUp enableScrollSpy={true} end={7257} duration={5} className='text-white text-[80px] font-semibold' /><br />
//                         <p className='text-white text-[20px] font-semibold'>Qoniqishdagi Mijozlar</p>
//                     </div>

//                     <div className='text-center m-[30px]'>
//                         <CountUp enableScrollSpy={true} start={0} end={7250} duration={5} className='text-white text-[80px] font-semibold' /> <br />
//                         <p className='text-white text-[20px] font-semibold'>Qoniqishdagi Mijozlar</p>
//                     </div>
//                 </div>
//             </div>
//             <span className='m-auto block h-[4px] w-[50%] mt-[50px] bg-[#ff0f0f]'></span>

//         </div>
//     );
// }

// export default Tourism;
