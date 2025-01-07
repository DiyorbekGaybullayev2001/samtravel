import React from 'react'
import { useTranslation } from 'react-i18next'

import logo from '../imgs/logo imgs/logotip.png'

import tur1 from '../our works/videos/Tur-1.mp4'
import tur2 from '../our works/videos/Tur-2.mp4'
import tur3 from '../our works/videos/Tur-3.mp4'

import client1v from '../our works/videos/Client-1v.mp4'
import client2v from '../our works/videos/Client-2v.mp4'
import client3v from '../our works/videos/Client-3v.mp4'


const Works =()=>{

    const {t} = useTranslation()

    return (
        <div id='works' className='container m-auto mt-[80px] '>

            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className='text-[30px] md:text-[50px] text-black font-bold'>{t('works1')}</h1>
            <span data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className='w-[60px] h-[6px] bg-[red] block'></span>

            <div className='flex flex-wrap justify-center gap-32 mt-[50px]'>

                <div className='relative w-[300px] h-[400px]'>
                    <video className='absolute -z-1 w-[300px] h-[400px] object-cover' src={tur1} controls ></video>
                    <img className='absolute h-[110px] w-[150px] ml-[-70px] mt-[-40px]' src={logo} alt="" />
                </div>

                <div className='relative w-[300px] h-[400px]'>
                    <video className='absolute -z-1 w-[300px] h-[400px] object-cover' src={tur2} controls ></video>
                    <img className='absolute h-[110px] w-[150px] ml-[-70px] mt-[-40px]' src={logo} alt="" />
                </div>

                <div className='relative w-[300px] h-[400px]'>
                    <video className='absolute -z-1 w-[300px] h-[400px] object-cover' src={tur3} controls ></video>
                    <img className='absolute h-[110px] w-[150px] ml-[-70px] mt-[-40px]' src={logo} alt="" />
                </div>

            </div>

            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className='text-[30px] md:text-[50px] mt-[80px] text-black font-bold'>{t('works2')}</h1>
            <span data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className='w-[60px] h-[6px] bg-[red] block'></span>
            
            <div className='flex flex-wrap justify-center gap-32 mt-[50px]'>

                <div className='relative w-[300px] h-[400px]'>
                    <video className='absolute -z-1 w-[300px] h-[400px] object-cover' src={client1v} controls ></video>
                    <img className='absolute h-[110px] w-[150px] ml-[-70px] mt-[-40px]' src={logo} alt="" />
                </div>

                <div className='relative w-[300px] h-[400px]'>
                    <video className='absolute -z-1 w-[300px] h-[400px] object-cover' src={client2v} controls ></video>
                    <img className='absolute h-[110px] w-[150px] ml-[-70px] mt-[-40px]' src={logo} alt="" />
                </div>

                <div className='relative w-[300px] h-[400px]'>
                    <video className='absolute -z-1 w-[300px] h-[400px] object-cover' src={client3v} controls ></video>
                    <img className='absolute h-[110px] w-[150px] ml-[-70px] mt-[-40px]' src={logo} alt="" />
                </div>
                
            </div>

        </div>
    )
}
export default Works