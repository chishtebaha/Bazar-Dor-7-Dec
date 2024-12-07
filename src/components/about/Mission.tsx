import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Target, Heart, Scale } from 'lucide-react';

export function Mission() {
  const { language } = useLanguage();
  
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {language === 'bn' ? 'আমাদের লক্ষ্য' : 'Our Mission'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Target className="h-10 w-10 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              {language === 'bn' ? 'স্বচ্ছতা' : 'Transparency'}
            </h3>
            <p className="text-gray-600">
              {language === 'bn'
                ? 'বাজারে স্বচ্ছতা নিশ্চিত করা এবং সঠিক মূল্য প্রকাশ করা'
                : 'Ensuring market transparency and accurate price disclosure'}
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Heart className="h-10 w-10 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              {language === 'bn' ? 'সামাজিক দায়বদ্ধতা' : 'Social Responsibility'}
            </h3>
            <p className="text-gray-600">
              {language === 'bn'
                ? 'সমাজের সকল শ্রেণীর মানুষের জন্য সহজলভ্য তথ্য প্রদান'
                : 'Providing accessible information for all social classes'}
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Scale className="h-10 w-10 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              {language === 'bn' ? 'ন্যায্য মূল্য' : 'Fair Pricing'}
            </h3>
            <p className="text-gray-600">
              {language === 'bn'
                ? 'ক্রেতা ও বিক্রেতার মধ্যে সুষম মূল্য নিশ্চিত করা'
                : 'Ensuring fair prices between buyers and sellers'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}