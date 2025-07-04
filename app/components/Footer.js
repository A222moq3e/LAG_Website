"use client"

import Link from "next/link";
import { useParams } from 'next/navigation';
import { t } from '../lib/i18n';

export default function Footer() {
  const params = useParams();
  const locale = params?.locale || 'en';

  return (
    <footer className="bg-gray-900 border-t border-gray-700 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-6 text-center">
          
          {/* Title */}
          <div>
            <h3 className="text-xl font-bold text-white">
              {t(locale, 'footer.title')}
            </h3>
          </div>

          {/* Description */}
          <div>
            <p 
              className="text-gray-300 max-w-md"
              dir={locale === 'ar' ? 'rtl' : 'ltr'}
            >
              {t(locale, 'footer.description')}
            </p>
          </div>

          {/* Follow Us Section */}
          <div className="flex flex-col items-center space-y-3">
            <h4 className="text-lg font-semibold text-gray-200">
              {t(locale, 'footer.followUs')}
            </h4>
            <div className="flex gap-6 justify-center">
              {/* Email */}
              <a 
                href="mailto:contact@laginitiative.com" 
                className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              
              {/* X (Twitter) */}
              <a 
                href="https://x.com/laginitiative" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-gray-700 to-black text-white hover:from-gray-600 hover:to-gray-900 transition-all duration-300 transform hover:scale-110"
                aria-label="X (Twitter)"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                </svg>
              </a>
              
              {/* Instagram */}
              <a 
                href="https://instagram.com/laginitiative" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2c2.172 0 2.43.01 3.281.048.85.038 1.434.174 1.943.372a3.9 3.9 0 011.416.923c.445.444.718.89.923 1.417.197.509.334 1.093.372 1.942C17.99 7.57 18 7.828 18 10s-.01 2.43-.048 3.281c-.038.85-.174 1.434-.372 1.943a3.9 3.9 0 01-.923 1.416c-.444.445-.89.718-1.417.923-.509.197-1.093.334-1.942.372C12.43 17.99 12.172 18 10 18s-2.43-.01-3.281-.048c-.85-.038-1.434-.174-1.943-.372a3.9 3.9 0 01-1.416-.923c-.445-.444-.718-.89-.923-1.417-.197-.509-.334-1.093-.372-1.942C2.01 12.43 2 12.172 2 10s.01-2.43.048-3.281c.038-.85.174-1.434.372-1.943a3.9 3.9 0 01.923-1.416c.444-.445.89-.718 1.417-.923.509-.197 1.093-.334 1.942-.372C7.57 2.01 7.828 2 10 2zm0 1.44c-2.136 0-2.39.009-3.233.047-.78.035-1.204.166-1.486.276a2.5 2.5 0 00-.92.598 2.5 2.5 0 00-.598.92c-.11.282-.24.706-.276 1.486C3.449 7.61 3.44 7.864 3.44 10s.009 2.39.047 3.233c.035.78.166 1.204.276 1.486.13.338.302.65.598.92.27.296.582.468.92.598.282.11.706.24 1.486.276.844.038 1.097.047 3.233.047s2.39-.009 3.233-.047c.78-.035 1.204-.166 1.486-.276a2.5 2.5 0 00.92-.598c.296-.27.468-.582.598-.92.11-.282.24-.706.276-1.486.038-.844.047-1.097.047-3.233s-.009-2.39-.047-3.233c-.035-.78-.166-1.204-.276-1.486a2.5 2.5 0 00-.598-.92 2.5 2.5 0 00-.92-.598c-.282-.11-.706-.24-1.486-.276C12.39 3.449 12.136 3.44 10 3.44zm0 2.452a4.108 4.108 0 110 8.216 4.108 4.108 0 010-8.216zm0 1.441a2.667 2.667 0 100 5.334 2.667 2.667 0 000-5.334zm5.23-.247a.96.96 0 11-1.92 0 .96.96 0 011.92 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Privacy Policy */}
          <div>
            <Link 
              href={`/${locale}/privacy-policy`}
              className="text-gray-300 hover:text-white underline transition-colors"
            >
              {t(locale, 'footer.privacyPolicy')}
            </Link>
          </div>

          {/* Copyright */}
          <div className="pt-4 border-t border-gray-700 w-full">
            <p 
              className="text-sm text-gray-400"
              dir={locale === 'ar' ? 'rtl' : 'ltr'}
            >
              {t(locale, 'footer.copyright')}
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}