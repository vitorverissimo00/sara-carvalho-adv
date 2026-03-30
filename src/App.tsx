/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import Terms from './pages/Terms';
import ServiceDetail from './pages/ServiceDetail';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<About />} />
          <Route path="servicos" element={<Services />} />
          <Route path="servicos/:slug" element={<ServiceDetail />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contato" element={<Contact />} />
          <Route path="privacidade" element={<Privacy />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="termos" element={<Terms />} />
        </Route>
      </Routes>
    </Router>
  );
}
