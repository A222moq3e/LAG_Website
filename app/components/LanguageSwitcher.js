"use client"

import { useRouter, useParams, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import { t } from '../lib/i18n';

export default function LanguageSwitcher() {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const locale = params?.locale || 'en';

  const handleLanguageChange = (newLocale) => {
    // Remove the current locale from the path and add the new one
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleLanguageChange(locale === 'en' ? 'ar' : 'en')}
        className="language-selector flex items-center gap-2 pointer-fine:cursor-pointer hover:opacity-80 transition-opacity"
        aria-label={`Switch to ${locale === 'en' ? 'Arabic' : 'English'}`}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {locale === 'en' ? t('en', 'navbar.arabic') : t('ar', 'navbar.english')}
        </span>
      </button>
    </div>
  );
} 