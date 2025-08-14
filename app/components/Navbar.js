"use client"

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from 'lucide-react';
import { useParams } from 'next/navigation';
import { t } from '../lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const params = useParams();
  const locale = params?.locale || 'en';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { href: `/${locale}`, label: 'navbar.home' },
    { href: `/${locale}#who-we-are-section`, label: 'navbar.about' },
    { href: `/${locale}/quiz`, label: 'navbar.quiz' },
    { href: `/${locale}/quiz-characters`, label: 'navbar.quizCharacters' },
    { href: `/${locale}/aid`, label: 'navbar.aid' },
    { href: `/${locale}/team`, label: 'navbar.team' },
    { href: `/${locale}/news`, label: 'navbar.news' },
    { href: `/${locale}/contact-us`, label: 'navbar.contact' },
  ];
  

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center gap-2 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200">
              <Image
                src="/logoPurple.svg"
                alt="LAG Logo"
                width={32}
                height={32}
                style={{
                  color: '#9D00FF'
                }}
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-6 lg:gap-8 xl:gap-12 justify-center items-center">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-white hover:text-[var(--primary-blue-light)] transition-colors duration-200 text-sm lg:text-base"
                    dir={locale === 'ar' ? 'rtl' : 'ltr'}
                  >
                    {t(locale, item.label)}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Desktop Language Switcher */}
            <div className="hidden md:flex items-center">
              <LanguageSwitcher />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-3">
              <LanguageSwitcher />
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-[var(--primary-blue-light)] transition-colors duration-200 p-1"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        } overflow-hidden bg-gray-900/98 backdrop-blur-md`}>
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="block text-white hover:text-[var(--primary-blue-light)] transition-colors duration-200 py-2 border-b border-gray-700/50 last:border-b-0"
                    dir={locale === 'ar' ? 'rtl' : 'ltr'}
                    onClick={closeMobileMenu}
                  >
                    {t(locale, item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
}