import './App.css';
import BuyProducts from './Components/BuyProducts/BuyProducts';
import BuyServices from './Components/BuyServices/BuyServices'
// import {Browser}
import SellServices from './Components/SellServices/SellServices';
import SellProducts from './Components/SellProducts/SellProducts';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HowItWorks from './Components/HowItWorks/HowItWorks';
import AboutUs from './Components/AboutUs/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BuyProducts />} />
        <Route path="buyservices" element={<BuyServices />} />
        <Route path="sellproducts" element={<SellProducts/>} />
        <Route path="sellservices" element={<SellServices />} />
        <Route path="howitworks" element={<HowItWorks />} />
        <Route path="aboutus" element={<AboutUs />} />
        {/* <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
