import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Quote } from 'lucide-react';

export function Founder() {
  const { language } = useLanguage();
  
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            {language === 'bn' ? 'প্রতিষ্ঠাতার কথা' : 'Founder\'s Message'}
          </h2>
          
          <div className="relative">
            <Quote className="h-12 w-12 text-emerald-100 absolute -top-6 -left-6" />
            <blockquote className="text-lg text-gray-700 mb-6 relative z-10">
              {language === 'bn'
                ? '"আমি বিশ্বাস করি যে প্রত্যেক মানুষের ন্যায্য মূল্যে প্রয়োজনীয় পণ্য কেনার অধিকার রয়েছে। বাজার দর এই লক্ষ্যে কাজ করে যাচ্ছে।"'
                : '"I believe every person has the right to purchase essential goods at fair prices. Bazar Dor continues to work towards this goal."'}
            </blockquote>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-emerald-700">
              {language === 'bn' ? 'বাহাউদ্দিন চিশতী' : 'Bahauddin Chishte'}
            </h3>
            <p className="text-gray-600 mt-2">
              {language === 'bn'
                ? 'প্রতিষ্ঠাতা ও প্রধান নির্বাহী কর্মকর্তা'
                : 'Founder & CEO'}
            </p>
            <p className="text-sm text-gray-500 mt-4 max-w-2xl mx-auto">
              {language === 'bn'
                ? 'সামাজিক সমস্যা ও দারিদ্র্য বিমোচনে নিবেদিত একজন উদ্যোক্তা, যিনি বাজার দরের মাধ্যমে স্বচ্ছতা ও ন্যায্যতা প্রতিষ্ঠার চেষ্টা করছেন।'
                : 'An entrepreneur dedicated to solving social problems and poverty alleviation, who strives to establish transparency and fairness through Bazar Dor.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}