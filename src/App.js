
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Nav from './components/nav';
import Hero from './components/hero';
import Affiliates from './components/affiliates';
import About from './components/about';
import Register from './components/register';
import Footer from './components/footer';
import Videos from './components/videos'
import CallCoachButton from './components/call';
import TryoutBanner from './components/tryout';

function App() {
  return (
    <div>
      <Nav />
      <TryoutBanner/>
      <Hero />
      <Affiliates />
      <Videos/>
      <About />
      <Register />
      <Footer />
      <CallCoachButton/>
    </div>
  );
}

export default App;
