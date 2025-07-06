'use client';

import React, { useState, useEffect } from 'react';
import { t } from '../../lib/i18n';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { InlineWidget } from "react-calendly";
import { CalendarDays, Clock, User, Star } from 'lucide-react';

export default function Aid({ params }) {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState('en');

  useEffect(() => {
    // Handle the async params
    const getLocale = async () => {
      const resolvedParams = await params;
      setCurrentLocale(resolvedParams.locale || 'en');
    };
    getLocale();
  }, [params]);

  // For demo purposes, using placeholder Calendly URLs
  // Replace these with actual Calendly URLs for each doctor
  const calendlyUrls = {
    doctor1: "https://calendly.com/abofahadhg/doctor-1",
    doctor2: "https://calendly.com/abofahadhg/doctor-2", 
    doctor3: "https://calendly.com/abofahadhg/doctor-3"
  };

  const handleCardClick = (doctorKey) => {
    setSelectedDoctor(doctorKey);
    setIsModalOpen(true);
  };

  const doctors = [
    {
      key: 'doctor1',
      icon: <User className="w-6 h-6" />,
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      key: 'doctor2', 
      icon: <User className="w-6 h-6" />,
      gradient: 'from-blue-500 to-teal-500'
    },
    {
      key: 'doctor3',
      icon: <User className="w-6 h-6" />,
      gradient: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-6 main-gradient-text leading-relaxed py-2">
          {t(currentLocale, 'pages.aid.title')}
        </h1>
        <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">
          {t(currentLocale, 'pages.aid.description')}
        </p>
      </div>

      {/* Doctor Cards Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 main-gradient-text">
          {t(currentLocale, 'pages.aid.doctorCards.title')}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t(currentLocale, 'pages.aid.doctorCards.subtitle')}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {doctors.map((doctor) => (
          <Card 
            key={doctor.key}
            className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 bg-gradient-card border-0"
            onClick={() => handleCardClick(doctor.key)}
          >
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${doctor.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            
            <CardHeader className="text-center relative z-10">
              {/* Doctor Icon */}
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${doctor.gradient} flex items-center justify-center text-white shadow-lg`}>
                {doctor.icon}
              </div>
              
              <CardTitle className="text-2xl font-bold mb-2 main-gradient-text">
                {t(currentLocale, `pages.aid.doctorCards.${doctor.key}.name`)}
              </CardTitle>
              
              <CardDescription className="text-lg font-semibold text-gray-700">
                {t(currentLocale, `pages.aid.doctorCards.${doctor.key}.specialty`)}
              </CardDescription>
            </CardHeader>

            <CardContent className="text-center space-y-4 relative z-10">
              {/* Experience Badge */}
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                {t(currentLocale, `pages.aid.doctorCards.${doctor.key}.experience`)}
              </div>

              {/* Rating Stars */}
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {t(currentLocale, `pages.aid.doctorCards.${doctor.key}.description`)}
              </p>

              {/* Book Button */}
              <div className="pt-4">
                <button className={`w-full py-3 px-4 rounded-lg bg-gradient-to-r ${doctor.gradient} text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2`}>
                  <CalendarDays className="w-4 h-4" />
                  {t(currentLocale, `pages.aid.doctorCards.${doctor.key}.buttonText`)}
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Calendly Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden p-0">
          <DialogHeader className="p-6 pb-4">
            <DialogTitle className="text-2xl font-bold main-gradient-text text-center">
              {selectedDoctor && t(currentLocale, `pages.aid.doctorCards.${selectedDoctor}.name`)}
            </DialogTitle>
          </DialogHeader>
          <div className="h-[700px] w-full">
            {selectedDoctor && (
              <InlineWidget
                url={calendlyUrls[selectedDoctor]}
                styles={{
                  height: '100%',
                  width: '100%',
                }}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
} 