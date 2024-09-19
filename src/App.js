/* import logo from './logo.svg'; */
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './componentes/Footer/Footer';
import ProductPage from './pages/ProductPage.jsx';
import FooterComponent from './components/footerComponent.jsx';
import Navigation from './navigation.jsx';

function App() {
  return (
    <Router>
      <Navigation />
      <ProductPage />
      <FooterComponent/>
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
