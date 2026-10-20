import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MusicPlayer from './components/MusicPlayer.jsx';
import Home from './pages/Home.jsx';
import Work from './pages/Work.jsx';
import CaseStudy from './pages/CaseStudy.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => { scrollTo(0, 0); }, [pathname]);

  return (
    <div className="flex min-h-svh flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-2 focus:z-10 focus:rounded focus:bg-surface focus:px-3 focus:py-2">Skip to content</a>
      <Header />
      <main id="main" className="mx-auto w-full max-w-[1280px] flex-1 px-5 md:px-8">
        <div key={pathname} className="animate-[rise_.5s_ease-out_both] pb-[72px] pt-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Work />} />
          </Routes>
        </div>
        <MusicPlayer />
      </main>
      <Footer />
    </div>
  );
}
