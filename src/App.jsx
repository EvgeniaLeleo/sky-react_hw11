import { Routes, Route } from 'react-router-dom';
// BrowserRouter as Router,

import './App.css';

import Home from './pages/Home/Home';
import LoginPass from './pages/LoginPass/LoginPass';
import Order from './pages/Order/Order';
import Page404 from './pages/Page404/Page404';
import About from './pages/About/About';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPass />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
