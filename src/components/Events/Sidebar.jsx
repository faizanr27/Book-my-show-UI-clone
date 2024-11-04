import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Badge, Button } from "@material-tailwind/react";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({
    dates:true,
    languages: false,
    categories:false,
    moreFilters: false,
    price: false
  });

  const [selectedLanguages, setSelectedLanguages] = useState(['Hindi', 'Bengali', 'English', 'Multi Language']);

  const dates = ['Today', 'Tomorrow', 'This Weekend'];
  const languages = ['Hindi', 'Bengali', 'English', 'Multi Language'];
  const categories = [
    'Music Shows', 'Comedy Shows', 'Workshops', 'Meetups', 'Kids',
    'Performances', 'New Year Parties', 'Exhibitions', 'Conferences',
    'Screening', 'Talks'
  ];

  const moreFilters = [
    'Outdoor Events', 'Fast Filling', 'Must Attend', 'Unmissable Events',
    'World Music', 'Kids Allowed', 'Offers for you', 'Online Streaming',
    'Masterclass', 'Talks'
  ];

  const price = [
    'Free', '0 - 500', '501 - 2000', 'Above 2000'
  ];


  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleLanguage = (lang) => {
    setSelectedLanguages(prev =>
      prev.includes(lang)
        ? prev.filter(l => l !== lang)
        : [...prev, lang]
    );
  };

  const SectionHeader = ({ title, isOpen, onToggle, onClear }) => (
    <div className="flex items-center justify-between mb-2">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={onToggle}
      >
        <span className="text-sm font-medium text-gray-900">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </div>
      <button
        className="text-sm text-red-500 hover:text-red-600"
        onClick={onClear}
      >
        Clear
      </button>
    </div>
  );

  return (
    <div className="w-full max-w-xs space-y-6 p-4 sm:block hidden">
      <h2 className="text-2xl font-semibold">Filters</h2>

      <div className="bg-white p-4">
        <SectionHeader
          title="Dates"
          isOpen={openSections.dates}
          onToggle={() => toggleSection('dates')}
          onClear={() => setSelectedLanguages([])}
        />
        {openSections.dates && (
          <div className="flex flex-wrap gap-2">
            {dates.map((lang) => (
              <Badge
                key={lang}
                variant={selectedLanguages.includes(lang) ? 'default' : 'outline'}
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => toggleLanguage(lang)}
              >
                <Button className="text-red-500 p-2" variant="outlined">{lang}</Button>
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Languages Section */}
      <div className="bg-white p-4">
        <SectionHeader
          title="Languages"
          isOpen={openSections.languages}
          onToggle={() => toggleSection('languages')}
          onClear={() => setSelectedLanguages([])}
        />
        {openSections.languages && (
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <Badge
                key={lang}
                variant={selectedLanguages.includes(lang) ? 'default' : 'outline'}
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => toggleLanguage(lang)}
              >
                <Button className="text-red-500 p-2" variant="outlined">{lang}</Button>
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Genres Section */}
      <div className="bg-white p-4">
        <SectionHeader
          title="Categories"
          isOpen={openSections.categories}
          onToggle={() => toggleSection('categories')}
          onClear={() => {}}
        />
        {openSections.categories && (
          <div className="flex flex-wrap gap-2">
            {categories.map((lang) => (
              <Badge
                key={lang}
                variant={selectedLanguages.includes(lang) ? 'default' : 'outline'}
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => toggleLanguage(lang)}
              >
                <Button className="text-red-500 p-2" variant="outlined">{lang}</Button>
              </Badge>
            ))}
          </div>
        )}
      </div>

      <div className="bg-white p-4">
        <SectionHeader
          title="More Filters"
          isOpen={openSections.moreFilters}
          onToggle={() => toggleSection('moreFilters')}
          onClear={() => {}}
        />
          {openSections.moreFilters && (
          <div className="flex flex-wrap gap-2">
            {moreFilters.map((lang) => (
              <Badge
                key={lang}
                variant={selectedLanguages.includes(lang) ? 'default' : 'outline'}
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => toggleLanguage(lang)}
              >
                <Button className="text-red-500 p-2" variant="outlined">{lang}</Button>
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Format Section */}
      <div className="bg-white p-4">
        <SectionHeader
          title="Price"
          isOpen={openSections.price}
          onToggle={() => toggleSection('price')}
          onClear={() => {}}
        />
          {openSections.price && (
          <div className="flex flex-wrap gap-2">
            {price.map((lang) => (
              <Badge
                key={lang}
                variant={selectedLanguages.includes(lang) ? 'default' : 'outline'}
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => toggleLanguage(lang)}
              >
                <Button className="text-red-500 p-2" variant="outlined">{lang}</Button>
              </Badge>
            ))}
          </div>
        )}
      </div>



      {/* Browse by Cinemas Button */}
      <Button
        variant="outlined"
        fullWidth
        className="border-red text-red-500 p-2 hover:bg-gray-50"
      >
        Browse by Cinemas
      </Button>
    </div>
  );
};

export default Sidebar;