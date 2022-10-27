import './App.css';
// import CarouselHeader from './component/CarouselHeader';
import NavHeader from './component/NavHeader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import Products from './Routes/Products';
import ContactPage from './Routes/ContactPage';
import MultiCard from './component/MultiCard';
import Manufacture from './Routes/Manufacture';
import Footer from './component/Footer';
import Error from './Routes/Error';

function App() {
  return (
    <BrowserRouter>
      <NavHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MultiCard" element={<MultiCard />} />
        <Route path="/Manufacture" element={<Manufacture />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/ContactPage" element={<ContactPage />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
