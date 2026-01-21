import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Page } from '../App';

interface NavbarProps {
  setPage: (page: Page) => void;
  currentPage: Page;
}

export const Navbar: React.FC<NavbarProps> = ({ setPage, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const menus = [
    {
      title: '회사소개',
      id: 'company',
      items: [
        { name: 'CEO 인사말', page: 'ceo' },
        { name: '회사연혁', page: 'history' },
        { name: '경영이념', page: 'philosophy' },
        { name: '오시는 길', page: 'location' },
      ]
    },
    {
      title: '업무실적',
      id: 'portfolio',
      items: [
        { name: '주거부문', page: 'residential' },
        { name: '비주거부문', page: 'non_residential' },
      ]
    },
    {
      title: '인재채용',
      id: 'careers',
      page: 'careers'
    }
  ];

  const handleNavClick = (page: string) => {
    setPage(page as Page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleLogoClick = () => {
    setPage('home');
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group mr-16"
          onClick={handleLogoClick}
        >
          <div className="w-9 h-9 bg-black text-white flex items-center justify-center rounded-sm">
             <span className="font-serif font-bold text-xl leading-none pt-1">H</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-black leading-none font-serif">
              DOUBLE H <span className="text-gold-500">PARTNERS</span>
            </span>
            <span className="text-[9px] text-gray-400 font-sans tracking-[0.2em] uppercase mt-1">
              Real Estate Global Group
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center h-full gap-1">
          {menus.map((menu) => (
            <div 
              key={menu.id}
              className="relative h-full flex items-center px-6 group cursor-pointer"
              onMouseEnter={() => setHoveredMenu(menu.id)}
              onMouseLeave={() => setHoveredMenu(null)}
              onClick={() => menu.page && handleNavClick(menu.page)}
            >
              <span className="text-[15px] font-medium text-gray-600 group-hover:text-black transition-colors flex items-center gap-1.5 font-sans">
                {menu.title}
                {menu.items && <ChevronDown className="w-3 h-3 text-gray-300 group-hover:text-gold-500 transition-transform duration-300 group-hover:rotate-180" />}
              </span>
              
              {/* Refined Dropdown */}
              {menu.items && (
                <div className={`absolute top-full left-0 w-52 bg-white border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 transform origin-top z-50 ${
                  hoveredMenu === menu.id ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'
                }`}>
                  <div className="py-2">
                    {menu.items.map((item) => (
                      <button
                        key={item.page}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavClick(item.page);
                        }}
                        className="w-full text-left px-6 py-3.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gold-600 transition-colors border-l-2 border-transparent hover:border-gold-500"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex-1 md:hidden"></div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black p-2 ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 transition-all duration-300 overflow-hidden shadow-xl ${
          isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col py-6 px-4">
          {menus.map((menu) => (
            <div key={menu.id} className="mb-6 last:mb-0">
              <div 
                className="font-serif font-bold text-xl mb-3 text-black px-4 cursor-pointer"
                onClick={() => menu.page && handleNavClick(menu.page)}
              >
                {menu.title}
              </div>
              {menu.items && (
                <div className="flex flex-col gap-1">
                  {menu.items.map((item) => (
                    <button
                      key={item.page}
                      onClick={() => handleNavClick(item.page)}
                      className="text-left text-[15px] text-gray-500 hover:text-black py-2 px-4 rounded-lg hover:bg-gray-50"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};