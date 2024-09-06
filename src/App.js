
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Nav from './components/nav';
import Hero from './components/hero';
import Team from './components/team';
import About from './components/about';
import Register from './components/register';
import Footer from './components/footer';
import Call from './components/call';

function App() {
  return (
    <div>
      <div>
      <Nav />
      <Hero />
      </div>  
      <Team />
      <About />
      <Register />
      <Footer />
      <Call />
    </div>
  );
}

export default App;
