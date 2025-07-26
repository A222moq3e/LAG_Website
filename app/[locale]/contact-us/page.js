'use client';

import React, { useState } from 'react';
import { t } from '../../lib/i18n';
import { cn } from '../../../lib/utils';
import { useParams } from 'next/navigation';

export default function ContactUs() {
  const params = useParams();
  const currentLocale = params?.locale || 'en';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Simple email sending using mailto (opens user's email client)
      const subject = encodeURIComponent(`Contact Form - ${formData.name}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
      `);
      
      const mailtoLink = `mailto:lagpsy.sa@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      setSubmitMessage(t(currentLocale, 'pages.contact.form.success'));
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      setSubmitMessage(t(currentLocale, 'pages.contact.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-background text-foreground mt-12">
      <h1 className="text-4xl font-bold text-center mb-8 main-gradient-text leading-relaxed py-2">
        {t(currentLocale, 'pages.contact.title')}
      </h1>
      <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        {t(currentLocale, 'pages.contact.description')}
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Section - Contact Form */}
        <div className="bg-card text-card-foreground p-8 rounded-lg border shadow-lg">
          <h2 className="text-2xl font-bold mb-6 main-gradient-text">{t(currentLocale, 'pages.contact.title')}</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                {t(currentLocale, 'pages.contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={cn(
                  "w-full px-4 py-3 rounded-lg border border-input bg-input text-foreground",
                  "focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent",
                  "placeholder:text-muted-foreground"
                )}
                placeholder={t(currentLocale, 'pages.contact.form.name')}
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                {t(currentLocale, 'pages.contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={cn(
                  "w-full px-4 py-3 rounded-lg border border-input bg-input text-foreground",
                  "focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent",
                  "placeholder:text-muted-foreground"
                )}
                placeholder={t(currentLocale, 'pages.contact.form.email')}
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                {t(currentLocale, 'pages.contact.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleInputChange}
                className={cn(
                  "w-full px-4 py-3 rounded-lg border border-input bg-input text-foreground resize-none",
                  "focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent",
                  "placeholder:text-muted-foreground"
                )}
                placeholder={t(currentLocale, 'pages.contact.form.message')}
                required
              ></textarea>
            </div>
            
            {submitMessage && (
              <div className={cn(
                "p-3 rounded-lg text-center",
                submitMessage === t(currentLocale, 'pages.contact.form.error') 
                  ? "bg-red-100 text-red-700 border border-red-200" 
                  : "bg-green-100 text-green-700 border border-green-200"
              )}>
                {submitMessage}
              </div>
            )}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full py-3 px-6 rounded-lg font-medium transition-all duration-200",
                "main-bg-gradient text-white",
                "hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
                isSubmitting && "opacity-50 cursor-not-allowed"
              )}
            >
              {isSubmitting 
                ? t(currentLocale, 'pages.contact.form.sending')
                : t(currentLocale, 'pages.contact.form.submit')
              }
            </button>
          </form>
        </div>
        
        {/* Right Section - Contact Information */}
        <div className="space-y-6">
          {/* Email Box */}
          <div className="bg-card text-card-foreground p-6 rounded-lg border shadow-lg flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="main-bg-gradient p-3 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {t(currentLocale, 'pages.contact.info.email')}
              </h3>
              <p className="text-[var(--primary-blue-light)]">lagpsy.sa@gmail.com</p>
            </div>
          </div>
          
          {/* Phone Box */}
          <div className="bg-card text-card-foreground p-6 rounded-lg border shadow-lg flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="main-bg-gradient p-3 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {t(currentLocale, 'pages.contact.info.phone')}
              </h3>
              <p className="text-[var(--primary-blue-light)]">Coming Soon</p>
            </div>
          </div>
          
          {/* Location Box */}
          <div className="bg-card text-card-foreground p-6 rounded-lg border shadow-lg flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="main-bg-gradient p-3 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {t(currentLocale, 'pages.contact.info.location')}
              </h3>
              <p className="text-[var(--primary-blue-light)]">Imam University, Riyadh</p>
            </div>
          </div>
          
          {/* Address Box (Bigger) */}
          <div className="bg-card text-card-foreground p-6 rounded-lg border shadow-lg flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="main-bg-gradient p-3 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {t(currentLocale, 'pages.contact.info.location')}
              </h3>
              <p className="text-[var(--primary-blue-light)]">{t(currentLocale, 'pages.contact.info.address')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 