"use client"
import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('English'); // Default language

  const languages = ['English', 'Chinese', 'Hindi', 'Spanish', 'French', 'Bengali', 'Portuguese', 'Russian', 'Urdu', 'Indonesian']; // Example language list

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setIsOpen(false);
    // TODO: Integrate i18n logic here to switch app language
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          className="flex items-center text-[#FFFFFF]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="text-[13px] leading-[16.9px]">{language}</div>
          <RiArrowDropDownLine className="text-[16px]" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute mt-2 w-24 bg-gray-800 shadow-lg z-10 rounded-lg">
          {languages.map((lang) => (
            <div
              key={lang}
              className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer"
              onClick={() => handleLanguageChange(lang)}
            >
              {lang}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
