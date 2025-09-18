
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "animate.css";
import './App.css';
import Nav from './components/nav';
import Hero from './components/hero';
import Affiliates from './components/affiliates';
import About from './components/about';
import Register from './components/register';
import Footer from './components/footer';
import CallCoachButton from './components/call';
import Coaches from './components/coaches';
import ImageCarousel from './components/imageCarousel';
function App() {
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
