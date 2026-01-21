import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features'; // Repurposed as Content Page
import { Footer } from './components/Footer';

// Define the available pages
export type Page = 
  | 'home' 
  | 'ceo' 
  | 'history' 
  | 'philosophy' 
  | 'location' 
  | 'residential' 
  | 'non_residential' 
  | 'careers';

interface ClickRipple {
  x: number;
  y: number;
  id: number;
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [ripples, setRipples] = useState<ClickRipple[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    const newRipple = {
      x: e.clientX,
      y: e.clientY,
      id: Date.now(),
    };
    setRipples((prev) => [...prev, newRipple]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-black/10 border-t-black rounded-full animate-spin"></div>
          <div className="text-black font-sans font-bold text-sm tracking-widest animate-pulse">DOUBLE H PARTNERS</div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-white text-black selection:bg-black selection:text-white cursor-default"
      onClick={handleClick}
    >
      {/* Click Effects Layer */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="fixed pointer-events-none rounded-full bg-black/10 animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '20px',
            height: '20px',
            transform: 'translate(-50%, -50%)',
            zIndex: 9999,
          }}
        />
      ))}

      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      
      <main>
        {currentPage === 'home' ? (
          <Hero />
        ) : (
          <Features page={currentPage} />
        )}
      </main>
      
      {currentPage !== 'home' && <Footer />}
    </div>
  );
};

export default App;