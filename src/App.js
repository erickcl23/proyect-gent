/* import logo from './logo.svg'; */
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar/NavScrollExample';
import Footer from './componentes/Footer/Footer';
import Carousel  from './componentes/Caresul/CarouselFadeExample.jsx';
import Tarjetas  from './componentes/grid/GridExample.jsx';
import AboutSection from './componentes/AboutSection/AboutSection.jsx';
import ProductPage from './pages/ProductPage.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Carousel />
      <Tarjetas />
      <AboutSection />
      <ProductPage />
      <Routes>
        <Route path='/' element/>
        <Route path='/' element/>
        <Route path='/' element/>
        <Route path='/' element/>
        <Route path='/' element/>
        <Route path='/' element/>
        <Route path='/product/:productid' element={<ProductPage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
