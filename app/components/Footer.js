"use client"

import Link from "next/link";
import { useParams } from 'next/navigation';
import { t } from '../lib/i18n';

export default function Footer() {
  const params = useParams();
  const locale = params?.locale || 'en';

  return (
    <div className="flex justify-between items-center">
      <div className="container mx-auto items-center p-4">
        <p 
          className="text-center text-sm text-gray-600"
          dir={locale === 'ar' ? 'rtl' : 'ltr'}
        >
          {t(locale, 'footer.copyright')}
        </p>
      </div>
    </div>
  );
}