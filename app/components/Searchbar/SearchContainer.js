'use client';

import { useState } from 'react';
import Searchbar from './Searchbar';
import SearchResults from './SearchResults';

export default function SearchContainer() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    // Implement your search logic here
    console.log('Searching for:', query);
    // For now, let's just set a dummy result
    setSearchResults([`Result for "${query}"`]);
  };

  return (
    <>
      <div className="w-full max-w-xl mb-8">
        <Searchbar onSearch={handleSearch} />
      </div>
      <SearchResults results={searchResults} />
    </>
  );
}