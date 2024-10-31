'use client';

import { useState } from 'react';

export default function Searchbar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
            setQuery(''); // Clear the search bar after submission
        }
    };

    return (
        <div className="w-full flex justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-xl">
                <div className="flex items-center border-b border-b-2 border-blue-500 py-2">
                    <input
                        className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" // Changed text-gray-700 to text-white
                        type="text"
                        placeholder="Search..."
                        aria-label="Search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                        className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="submit"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}
