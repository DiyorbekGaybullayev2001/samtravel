import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backent from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import uzTranslation from '../src/locales/uz.json'
import ruTranslation from '../src/locales/ru.json'
import enTranslation from '../src/locales/en.json'


const luangage = localStorage.getItem('i18nextLng') || 'uz'


i18n
.use(Backent) 
.use(LanguageDetector) //tilni aniqlab berish
.use(initReactI18next) //i18next bn react-i18next bog'lash
.init({
    fallbackLng : 'en',
    lng : luangage,
    debug:true,
    resources:{
        uz:{translation: uzTranslation},
        ru:{translation: ruTranslation},
        en:{translation: enTranslation}
    }
})

export default i18n


