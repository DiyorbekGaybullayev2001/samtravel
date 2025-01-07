import { useEffect, useState } from 'react';
import About from './about/about';
import './App.css';
import Countries from './countries/countries';
import Footer from './footer/footer';
import Loader from './laoder/laoder';
import Navbar from './navbar/navbar';
import OneSwiper from './oneswiper/oneswiper';
import Works from './our works/works';
import Services from './servicess/services';
import Tourism from './tourism/tourism';
import Travels from './travels/travels';
import TwoSwiper from './twoswiper/twoswiper';


function App() {

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const res = setTimeout(() => setLoader(false), 4000);
    return () => clearTimeout(res);
  })

  return (

    <div>
      {
        loader ? <Loader/> : (
          <>
          <Navbar/>
          <OneSwiper/>
          <TwoSwiper/>
          <About/>
          <Countries/>
          <Works/>
          <Tourism/>
          <Services/>
          <Travels/>
          <Footer/>
          </>
        )
      }
    </div>
    
  );
}

export default App;
