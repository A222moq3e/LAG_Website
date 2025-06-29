import Image from "next/image";
import { t } from '../lib/i18n';

export default function Home({ params }) {
  const locale = params?.locale || 'en';

  return (
    <div className="flex flex-col gap-4">
        <section className="flex flex-col justify-center items-center gap-4 h-screen">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl font-bold text-center">
            {t(locale, 'pages.home.title')}
          </h1>
          <p className="text-lg text-center text-gray-600 max-w-2xl">
            {t(locale, 'pages.home.description')}
          </p>
          <button className="bg-linear-to-r from-blue-500 to-purple-500 text-white font-bold px-6 py-4 rounded-md cursor-pointer">
            Start Your Journey
          </button>
        </div>
        </section>
        <section className="flex flex-col gap-4">
        <div className="flex flex-col justify-center items-center gap-4">   
            <h1>Who We Are</h1>
        </div>
        </section>
    </div>
  );
} 