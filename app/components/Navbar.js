"use client"

import Link from "next/link";
import Image from "next/image";
import { User } from 'lucide-react';
import { useParams } from 'next/navigation';
import { t } from '../lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const params = useParams();
  const locale = params?.locale || 'en';

  const navItems = [
    { href: `/${locale}`, label: 'navbar.home' },
    { href: `/${locale}/about-us`, label: 'navbar.about' },
    { href: `/${locale}/quiz`, label: 'navbar.quiz' },
    { href: `/${locale}/aid`, label: 'navbar.aid' },
    { href: `/${locale}/team`, label: 'navbar.team' },
    { href: `/${locale}/news`, label: 'navbar.news' },
    { href: `/${locale}/contact-us`, label: 'navbar.contact' },
  ];

  return (
    <div className="flex justify-between items-center">
      <div className="container mx-auto flex flex-row justify-between items-center p-4">
        <div className="flex justify-between items-center gap-2">
          <User className="w-6 h-6" />
          <span className="text-2xl font-bold">LAG</span>
        </div>

        <ul className="flex gap-12 justify-center items-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className="hover:text-blue-600 transition-colors"
                dir={locale === 'ar' ? 'rtl' : 'ltr'}
              >
                {t(locale, item.label)}
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="flex justify-between items-center">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}