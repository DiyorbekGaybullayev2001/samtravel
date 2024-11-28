import React from 'react';
import img from '../imgs/about img/about.jpg';
import imglogo from '../imgs/logo imgs/logo.png';
import { useTranslation } from 'react-i18next';

const About = () => {
  const {t} = useTranslation()
  return (
    <div id='about' className="container mx-auto flex flex-wrap pt-40 px-4 md:px-0 overflow-hidden">
      {/* Matn qismi */}
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="50"
        className="w-full md:w-1/2 px-4 md:px-8 mb-8"
      >
        <span className="block h-1 w-3/4 bg-red-500"></span>
        <br />
        <h1  className="text-4xl md:text-5xl font-bold text-black">{t('about')}</h1>
        <span className="w-16 h-[6px] mt-[10px] bg-red-500 block"></span>
        <br />
        <p className="font-semibold text-lg md:text-xl"> {t('abouttext1')}</p>
        <br />
        <p className="font-semibold text-lg md:text-xl"> {t('abouttext2')} </p>
        <br />
        <p className="font-semibold text-lg md:text-xl"> {t('abouttext3')}</p>
        <br />
        <span className="block h-1 w-3/4 bg-red-500"></span>
      </div>

      {/* Rasmlar qismi */}
      <div
        data-aos="fade-left"
        data-aos-duration="2000"
        data-aos-delay="50"
        className="w-full md:w-1/2 px-4 md:px-8 relative h-[400px] md:h-[600px]"
      >
        <img
          className="absolute z-0 h-full w-full object-cover rounded-lg shadow-lg"
          src={img}
          alt="About Us"
        />
        <img
          className="absolute z-10 w-[150px] md:w-[250px] bottom-4 md:bottom-8 left-4 md:left-8"
          src={imglogo}
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default About;










// import React from 'react'
// import img from '../imgs/about img/about.jpg'
// import imglogo from '../imgs/logo imgs/logo.png'
// const About = () => {
//     return(
        
//         <div className='container flex m-auto mt-[80px]'>
            
//             <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className='w-[50%] m-[20px] p-[15px]'>
//                 <span className='block h-[4px] w-[80%] bg-[red]'></span>
//                 <br />
//                 <h1 className='text-[50px] text-black font-bold'>Biz haqimizda</h1>
//                 <span className='w-[60px] h-[6px] bg-[red] block'></span>

//                     <br />
//                     <p className='font-semibold text-[20px]'>EASY VISA CONSULTING – sayohatchilar uchun visa ko‘mak berishga ixtisoslashgan tez o‘sayotgan kompaniya. Biz sizning sayohatlaringizni qulay va bezovta qilmaydigan qilishga e'tibor qaratamiz.</p>
//                     <br />
//                     <p className='font-semibold text-[20px]'>EASY VISA CONSULTING ta'til va biznes safarlari uchun Shengen, Kanada, AQSH, Buyuk Britaniya, Yaponiya va Koreyaga visa rasmiylashtirish xizmatlarini taqdim etadi. Tajribali mutaxassislardan iborat jamoamiz yuqori xizmat darajasini ta'minlaydi, shunda siz sayohat rejalaringizga e'tibor qaratishingiz mumkin.</p>
//                     <br />
//                     <p className='font-semibold text-[20px]'>Biz O‘zbekistonlik mijozlar uchun visa olish jarayonini oddiy va tushunarli qilishga qaratilganmiz, shunda ularga dunyoning eng yaxshi sayohat manzillariga oson va tez kirish imkonini beramiz.</p>
//                     <br /><br />
//                 <span className='block h-[4px] w-[80%] bg-[red]'></span>
//             </div>

//             <div data-aos="fade-left" data-aos-duration="2000" data-aos-delay="50" className='w-[50%] p-[10px] h-[600px] relative'>
//                 <br />
//                 <img className='absolute -z-1 h-[100%] w-[90%] ml-[50px] rounded-[25px]' src={img} alt="" />
//                 <img className='absolute h-[150px] w-[250px] mt-[470px]' src={imglogo} alt="" />
//             </div> 

//         </div>
//     )
// }
//  export default About
