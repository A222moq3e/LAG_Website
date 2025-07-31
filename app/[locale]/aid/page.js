'use client';

import React, { useState, useEffect } from 'react';
import { t } from '../../lib/i18n'; // دالة الترجمة
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../../components/ui/dialog';
import { InlineWidget } from "react-calendly";
import { CalendarDays, Clock, User, Star } from 'lucide-react';

export default function Aid({ params }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState('en');

  useEffect(() => {
    const getLocale = async () => {
      const resolvedParams = await params;
      setCurrentLocale(resolvedParams.locale || 'en');
    };
    getLocale();
  }, [params]);

  // رابط الحجز الثابت
  const calendlyUrl = "https://calendly.com/lagpsy-sa/meet-with-me";

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-6 main-gradient-text leading-relaxed py-2">
          {t(currentLocale, 'pages.aid.title')}
        </h1>
        <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">
          {t(currentLocale, 'pages.aid.description')}
        </p>
      </div>

      {/* Doctor Card */}
      <div className="flex justify-center">
        <Card
          className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 bg-gradient-card border-0 max-w-md w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

          <CardHeader className="text-center relative z-10">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white shadow-lg">
              <User className="w-6 h-6" />
            </div>
            <CardTitle className="text-2xl font-bold mb-2 main-gradient-text">
              {t(currentLocale, 'pages.aid.doctorCards.doctor1.name')}
            </CardTitle>
            <CardDescription className="text-lg font-semibold text-gray-700">
              {t(currentLocale, 'pages.aid.doctorCards.doctor1.specialty')}
            </CardDescription>
          </CardHeader>

          <CardContent className="text-center space-y-4 relative z-10">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              {t(currentLocale, 'pages.aid.doctorCards.doctor1.experience')}
            </div>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t(currentLocale, 'pages.aid.doctorCards.doctor1.description')}
            </p>
            <div className="pt-4">
              <button
                onClick={handleCardClick}
                className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <CalendarDays className="w-4 h-4" />
                {t(currentLocale, 'pages.aid.doctorCards.doctor1.buttonText')}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Calendly Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden p-0">
          <DialogHeader className="p-6 pb-4">
            <DialogTitle className="text-2xl font-bold main-gradient-text text-center">
              {t(currentLocale, 'pages.aid.doctorCards.doctor1.name')}
            </DialogTitle>
          </DialogHeader>
          <div className="h-[700px] w-full">
            <InlineWidget
              url={calendlyUrl}
              styles={{
                height: '100%',
                width: '100%',
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
