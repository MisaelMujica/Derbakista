import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Servicios from './components/Servicios';
import Testimonios from './components/Testimonios';
import Footer from './components/Footer';



function App() {


  return (
    <div className="bg-[url('/bg.svg')] dark:bg-[url('/bg_dark.svg')] bg-cover">
      <div className="container m-auto">
        <Navbar />
        <Hero />
        <Bio />
        <Servicios />
        <Testimonios />
        <Footer />
      </div>
    </div>
  )
}

export default App
