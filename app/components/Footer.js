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
                  {/* X (Twitter) */}
                        <a 
                href="https://x.com/lagpsy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-gray-700 to-black text-white hover:from-gray-600 hover:to-gray-900 transition-all duration-300 transform hover:scale-110"
                aria-label="X (Twitter)"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                </svg>
              </a>
              {/* Email */}
              <a 
                href="mailto:lagpsy.sa@gmail.com" 
                className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              
  
              
              {/* Tiktok */}
              <a 
                href="https://tiktok.com/@lagpsy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-gray-700 to-black text-white hover:from-gray-600 hover:to-gray-900 transition-all duration-300 transform hover:scale-110"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.76 20.71a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.8-.71z"/>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/company/lagpsy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-800 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
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