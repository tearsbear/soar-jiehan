import React from 'react';
import { Search } from 'lucide-react';

const MobileHeader: React.FC = () => {
  return (
    <div className="md:hidden p-4 bg-white">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search for something"
          className="block w-full pl-12 pr-5 py-3 rounded-full bg-gray-100 text-gray-900 focus:outline-none focus:ring-0"
        />
      </div>
    </div>
  );
};

export default MobileHeader;