import React from "react";
import { Search } from "lucide-react";
const SearchInput = ({ placeholder = "Rechercher...", onChange }) => {
  return (
    <div className="flex">
        <input
          type="text"
          placeholder={placeholder}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => onChange(e.target.value)}
        />
         <button className="bg-red-900 text-white px-4 rounded-r">
            <Search size={18} />
        </button>
    </div>
  );
};

export default SearchInput;
