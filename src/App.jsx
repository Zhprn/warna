import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import NavbarComponent from './components/NavbarComponent';
import HeroComponent from './components/HeroComponent';
import AboutComponent from './components/AboutComponent';
import TalkComponent from './components/TalkComponent';
import FooterComponent from './components/FooterComponent';
import ServicesComponent from './components/ServicesComponent';

function App() {
  return (
    <>
    <NavbarComponent />
    <HeroComponent />
    <AboutComponent />
    <ServicesComponent />
    <TalkComponent />
    <FooterComponent />
    </>
  )
}

export default App
