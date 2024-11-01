'use client';

import { useState } from 'react';

export default function Searchbar({ onSearch, noResults }) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
            setQuery(''); // Clear the search bar after submission
        }
    };

    return (
        <div className="w-full flex justify-center mb-4"> {/* Center the search bar and add margin */}
            <form onSubmit={handleSubmit} className="w-full max-w-xl">
                <div className="flex items-center border border-yellow-500 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105"> {/* Add rounded corners, shadow, and yellow outline */}
                    <input
                        className="appearance-none bg-gray-800 border-none w-full text-white py-2 px-4 leading-tight focus:outline-none transition duration-300 ease-in-out placeholder-gray-400"
                        type="text"
                        placeholder="Search..."
                        aria-label="Search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                        className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 text-sm text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out" // Style button with rounded corners and hover effect
                        type="submit"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}
