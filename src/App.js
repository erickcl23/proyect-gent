import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import FooterComponent from './assets/components/footerComponent.jsx'
import Routes from './navigation/Routes.jsx';

export default function App() {
  return (
    <>
      <Router>
        <Routes />
        <FooterComponent />
      </Router>
    </>
  );
}
