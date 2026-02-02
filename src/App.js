
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "animate.css";
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Affiliates from './components/Affiliates';
import About from './components/About';
import Register from './components/Register';
import Footer from './components/Footer';
import CallCoachButton from './components/Call';
import Coaches from './components/Coaches';
import ImageCarousel from './components/ImageCarousel';
function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || elements.length === 0) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Nav />
      <Hero />
      <ImageCarousel/>
      <About />
      <Coaches/>
      <Register />
      <Affiliates />  
      <Footer />
      <CallCoachButton/>
    </div>
  );
}

export default App;
