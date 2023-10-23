import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import React from "react";
//import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/vendor/aos/aos.css';
import './assets/css/main.css';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <>
        {/* <Navbar /> */}
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </>
      </BrowserRouter>
    </div>
  );
}

//export default App;
