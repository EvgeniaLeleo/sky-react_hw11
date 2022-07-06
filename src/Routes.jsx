import { Routes as ReactRoutes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import LoginPass from './pages/LoginPass/LoginPass';
import Order from './pages/Order/Order';
import Page404 from './pages/Page404/Page404';
import About from './pages/About/About';

const Routes = () => {
  return (
    <div>
      <ReactRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPass />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </ReactRoutes>
    </div>
  );
};

export default Routes;
