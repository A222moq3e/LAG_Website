import Image from "next/image";
import { t } from '../lib/i18n';

export default function Home({ params }) {
  const locale = params?.locale || 'en';

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center">
          {t(locale, 'pages.home.title')}
        </h1>
        <p className="text-lg text-center text-gray-600 max-w-2xl">
          {t(locale, 'pages.home.description')}
        </p>
      </main>
    </div>
  );
} 