
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Menu from './components/menu';
import Header from './components/Header';
import About from './components/About';
import Skils from './components/Skils';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  return (
    <>
    <Menu />
    <Header />
    <About />
    <Skils />
    <Projects />
    <Contact />
    </>
  )
}

export default App
