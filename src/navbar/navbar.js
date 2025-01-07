import React, { useEffect, useState } from "react";
import logo from '../imgs/logo imgs/logotip.png'
import navbarbg from '../imgs/navbar-bg.png'
import { AiTwotoneUpCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Navbar = () =>{

    const {t, i18n} = useTranslation();
    const luangage = localStorage.getItem('i18nextLng') 
    const handleChange = (event) =>{
        const selectedLuangage = event.target.value;
        i18n.changeLanguage(selectedLuangage)
    } 


    const [bar, setbar] = useState(false);
    const clic = () => {
        if (bar) {
            setbar(false)
        } else {
            setbar(true)
        }
    }
    // Sahifa pastki holatini kuzatish uchun holat
  const [showButton, setShowButton] = useState(false);

  // Sahifa scroll hodisasini kuzatish
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500); // Scroll 300px dan oshganda ko'rsatiladi
    };

    window.addEventListener("scroll", handleScroll);

    // Tozalash funksiyasi
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
        })
    }

    return(
        <div className="fixed top-0 z-50 bg-[#f3f3f3f1]  h-[70px] m-auto w-[100%]">

            {
                showButton && 
                <AiTwotoneUpCircle onClick={scrollToTop} className="cursor-pointer fixed right-[5%] bottom-[8%] text-white h-[40px] w-[40px]"/>        
            }
            
            
            <nav  className=" h-[70px] w-[100%] flex relative justify-around"> 

                <div className="h-[70px]">
                    <a href="/">
                        <img className="h-[80px] w-[100px] cursor-pointer" src={logo} alt="logo" />
                    </a>
                </div>
                    <img className="absolute -z-10 h-[70px] w-[30%] m-auto opacity-35" src={navbarbg} alt="bg"/>

                    
                        {/* <a href="tel:+998997126666" className="md:hidden text-center ">+99899 712 66 66</a> */}

                        <button onClick={clic} className="md:hidden" >
                            {
                                !bar? <GiHamburgerMenu  className="w-[30px] h-[30px]"/> : <FiX className="w-[30px] h-[30px]"/>
                            }
                        </button>
                    
                

                <div className="hidden md:flex items-center">

                    <ul>
                        <li> 
                            <a className="mx-[10px] font-semibold font-serif hover:text-[red] text-[14px]" href="#about">{t('BIZ HAQIMIZDA')}</a>
                        </li>
                    </ul>
                    <ul>
                        <li> 
                            <a className="mx-[10px] font-semibold font-serif hover:text-[red] text-[14px]" href="#countries">{t('MAMLAKATLAR')}</a>
                        </li>
                    </ul>
                    <ul>
                        <li> 
                            <a className="mx-[10px] font-semibold font-serif hover:text-[red] text-[14px]" href="#services">{t('XIZMATLAR')}</a>
                        </li>
                    </ul>
                    <ul>
                        <li> 
                            <a className="mx-[10px] font-semibold font-serif hover:text-[red] text-[14px]" href="#works">{t('ISHLARIMIZ')}</a>
                        </li>
                    </ul>
                    <ul>
                        <li> 
                            <a className="mx-[10px] font-semibold font-serif hover:text-[red] text-[14px]" href="#contact">{t('ALOQA')}</a>
                        </li>
                    </ul>

                    <select className="bg-black text-white ml-[15px]" name="" id="" onChange={handleChange} value={luangage}>
                        <option value="uz">UZ</option>
                        <option value="ru">RU</option>
                        <option value="en">EN</option>
                    </select>
                    
                </div>
            </nav>

            {
                bar && <div className="btnX block items-center bg-white text-center " >

                <ul className="p-[10px]">
                    <li> 
                        <a className="mx-[10px] font-semibold font-serif hover:text-[red] text-[14px]" href="#about">{t('BIZ HAQIMIZDA')}</a>
                    </li>
                </ul>
                <ul className="p-[10px]">
                    <li> 
                        <a className="mx-[10px] font-semibold font-serif hover:text-[red] text-[14px]" href="#countries">{t('MAMLAKATLAR')}</a>
                    </li>
                </ul>
                <ul className="p-[10px]">
                    <li> 
                        <a className="mx-[10px] font-semibold font-serif hover:text-[red] text-[14px]" href="#services">{t('XIZMATLAR')}</a>
                    </li>
                </ul>
                <ul className="p-[10px]">
                    <li> 
                        <a className="mx-[10px] font-semibold font-serif hover:text-[red] text-[14px]" href="#works">{t('ISHLARIMIZ')}</a>
                    </li>
                </ul>
                <ul className="p-[10px]">
                    <li> 
                        <a className="mx-[10px] font-semibold font-serif hover:text-[red] text-[14px]" href="#contact">{t('ALOQA')}</a>
                    </li>
                </ul>

                <select className="bg-black text-white m-[10px] " name="lng" id="lng" onChange={handleChange} value={luangage}>
                    <option value="uz">UZ</option>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                </select>
                
            </div>
            }


        </div>
    )
}

export default Navbar