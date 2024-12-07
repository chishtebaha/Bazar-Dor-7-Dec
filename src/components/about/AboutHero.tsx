import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { LineChart, Users, ShieldCheck } from 'lucide-react';

export function AboutHero() {
  const { language } = useLanguage();
  
  return (
    <div className="bg-emerald-700 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          {language === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}
        </h1>
        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-emerald-100">
          {language === 'bn'
            ? 'বাজার দর একটি সামাজিক উদ্যোগ যা সাধারণ মানুষকে বাজার দর সম্পর্কে সঠিক তথ্য প্রদান করে।'
            : 'Bazar Dor is a social initiative providing accurate market price information to the general public.'}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <LineChart className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              {language === 'bn' ? 'নির্ভরযোগ্য তথ্য' : 'Reliable Data'}
            </h3>
            <p className="text-emerald-100">
              {language === 'bn'
                ? 'প্রতিদিন আপডেট করা বাজার দর'
                : 'Daily updated market prices'}
            </p>
          </div>
          
          <div className="text-center">
            <Users className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              {language === 'bn' ? 'সবার জন্য উন্মুক্ত' : 'Open for All'}
            </h3>
            <p className="text-emerald-100">
              {language === 'bn'
                ? 'বিনামূল্যে ব্যবহারযোগ্য'
                : 'Free and accessible to everyone'}
            </p>
          </div>
          
          <div className="text-center">
            <ShieldCheck className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              {language === 'bn' ? 'বিশ্বস্ত সেবা' : 'Trusted Service'}
            </h3>
            <p className="text-emerald-100">
              {language === 'bn'
                ? 'নিরপেক্ষ ও স্বচ্ছ তথ্য'
                : 'Unbiased and transparent information'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}