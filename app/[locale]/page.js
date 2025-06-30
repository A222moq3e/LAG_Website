import Image from "next/image";
import { t } from '../lib/i18n';

export default async function Home({ params }) {
  const { locale } = await params;
  const currentLocale = locale || 'en';

  return (
    <div className="flex flex-col gap-4">
      <section 
        className="flex flex-col justify-center items-center gap-4 h-screen relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/controllerImage.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark blur overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        
        <div className="flex flex-col justify-center items-center gap-4 relative z-10">
          <h1 className="text-5xl font-bold text-center main-gradient-text drop-shadow-lg">
            {t(currentLocale, 'pages.home.title')}
          </h1>
          <p className="text-xl text-center text-gray-100 max-w-2xl drop-shadow-md">
            {t(currentLocale, 'pages.home.description')}
          </p>
          <button className="main-bg-gradient text-white font-bold px-8 py-4 rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
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