'use client';

import { useState } from 'react';

export default function SearchInput({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSubmit(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex items-center border-b border-b-2 border-blue-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search..."
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchButton />
      </div>
    </form>
  );
}