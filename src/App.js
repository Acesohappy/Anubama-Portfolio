import Navbar from './Pages/Navbar.jsx';
import Header from './Pages/Header.jsx';
import About from './Pages/About.jsx';
import Projects from './Pages/Projects.jsx';
import Contact from './Pages/Contact.jsx';
import Footer from './Pages/Footer.jsx';
import Skills from './Pages/Skills.jsx';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
