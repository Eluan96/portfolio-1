import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoSection from './components/LogoSection';
import Mission from './components/Mission';
import Features from './components/Features';
import Expertise from './components/Expertise';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ConatactPage';

import './App.css';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const Home = () => (
  <>
    <Hero />
    <LogoSection />
    <Mission />
    <Features />
    <Expertise />
    <FAQ />
    <Blog />
  </>
);

function App() {
  return (
    <Router>
      <main className="bg-dark antialiased overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="blog" element={<Blog />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
