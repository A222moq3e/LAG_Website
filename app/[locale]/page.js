import Image from "next/image";
import { t } from '../lib/i18n';

export default async function Home({ params }) {
  const { locale } = await params;
  const currentLocale = locale || 'en';

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="flex flex-col justify-center items-center gap-6 md:gap-8 min-h-screen px-4 sm:px-6 lg:px-8 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/controllerImage.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark blur overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        
        <div className="flex flex-col justify-center items-center gap-6 md:gap-8 relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center main-gradient-text font-orbitron drop-shadow-lg px-4">
            {t(currentLocale, 'pages.home.title')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-gray-100 max-w-3xl drop-shadow-md px-4">
            {t(currentLocale, 'pages.home.description')}
          </p>
          <button className="main-bg-gradient text-white font-bold px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-sm sm:text-base md:text-lg rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            {t(currentLocale, 'pages.home.cta_button')}
          </button>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col justify-center items-center gap-8 md:gap-12">   
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center main-gradient-text drop-shadow-lg">
              {t(currentLocale, 'pages.home.who_we_are.title')}
            </h1>
            
            {/* Mission and Vision Cards */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full max-w-5xl">
              {/* Mission Card */}
              <div className="flex flex-col gap-4 md:gap-6 flex-1 p-6 md:p-8 bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50 hover:border-purple-500/30">
                <div className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl md:text-2xl font-bold">M</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    {t(currentLocale, 'pages.home.who_we_are.mission.title')}
                  </h2>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                  {t(currentLocale, 'pages.home.who_we_are.mission.description')}
                </p>
              </div>

              {/* Vision Card */}
              <div className="flex flex-col gap-4 md:gap-6 flex-1 p-6 md:p-8 bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50 hover:border-teal-500/30">
                <div className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl md:text-2xl font-bold">V</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    {t(currentLocale, 'pages.home.who_we_are.vision.title')}
                  </h2>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                  {t(currentLocale, 'pages.home.who_we_are.vision.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 