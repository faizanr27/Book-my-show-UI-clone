import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Badge, Button } from "@material-tailwind/react";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({
    languages: true,
    genres: false,
    format: false
  });

  const [selectedLanguages, setSelectedLanguages] = useState(['Hindi', 'Bengali', 'English', 'Multi Language']);

  const languages = ['Hindi', 'Bengali', 'English', 'Multi Language'];
  const genres = ['Action', 'Drama', 'Thriller', 'Adventure', 'Comedy','Horror','Sci-Fi', 'Suspense'];
  const format = ['2D', '3D', 'IMAX 2D', 'IMAX 3D'];

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
          title="Genres"
          isOpen={openSections.genres}
          onToggle={() => toggleSection('genres')}
          onClear={() => {}}
        />
        {openSections.genres && (
          <div className="flex flex-wrap gap-2">
            {genres.map((lang) => (
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
          title="Format"
          isOpen={openSections.format}
          onToggle={() => toggleSection('format')}
          onClear={() => {}}
        />
          {openSections.format && (
          <div className="flex flex-wrap gap-2">
            {format.map((lang) => (
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
        className="border-red text-gray-700 hover:bg-gray-50"
      >
        Browse by Cinemas
      </Button>
    </div>
  );
};

export default Sidebar;