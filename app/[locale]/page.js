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
        
        <div className="flex flex-col justify-center items-center gap-8 relative z-10">
          <h1 className="text-5xl font-bold text-center main-gradient-text font-orbitron drop-shadow-lg p-4">
            {t(currentLocale, 'pages.home.title')}
          </h1>
          <p className="text-xl text-center text-gray-100 max-w-2xl drop-shadow-md">
            {t(currentLocale, 'pages.home.description')}
          </p>
          <button className="main-bg-gradient text-white font-bold px-8 py-4 rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
            {t(currentLocale, 'pages.home.cta_button')}
          </button>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col justify-center items-center gap-4 h-screen">   
          <h1 className="text-4xl font-bold text-center main-gradient-text drop-shadow-lg">
            {t(currentLocale, 'pages.home.who_we_are.title')}
          </h1>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-4">
                <h2>{t(currentLocale, 'pages.home.who_we_are.mission.title')}</h2>
                {/* <Image src="/controllerImage.png" alt="Controller" width={50} height={50} /> */}
              </div>
              <p>{t(currentLocale, 'pages.home.who_we_are.mission.description')}</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-4">
                <h2>{t(currentLocale, 'pages.home.who_we_are.vision.title')}</h2>
                {/* <Image src="/controllerImage.png" alt="Controller" width={50} height={50} /> */}
              </div>
              <p>{t(currentLocale, 'pages.home.who_we_are.vision.description')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 