import { createRoot } from 'react-dom/client';
import '../assets/styles/index.css';
import NavBar from '../components/NavBar.jsx';
import Hero from '../components/Hero.jsx';
import ProductInfo from '../components/ProductInfo.jsx';
import TechnicalInfo from '../components/TechnicalInfo.jsx';
import GetProduct from '../components/GetProduct.jsx';
import Footer from '../components/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <header>
      <NavBar />
      <Hero />
    </header>
    <main>
      <ProductInfo />
      <TechnicalInfo />
      <GetProduct />
    </main>
    <footer>
      <Footer />
    </footer>
  </>

);
