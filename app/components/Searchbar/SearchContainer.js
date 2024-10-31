'use client';

import { useState } from 'react';
import Searchbar from './Searchbar';
import SearchResults from './SearchResults';

// Array holding the data for the boxes
const boxes = [
    { title: 'Cooking Recipes and Tips', link: '/cooking' },
    { title: 'Game Development Basics', link: '/game_developing' },
    { title: 'Learn to Play Guitar', link: '/guitar' },
    { title: 'Grilling Techniques and Recipes', link: '/grilling' },
    { title: 'Math Concepts Made Easy', link: '/math' },
    { title: 'A Complete Guide to iPhone Features', link: '/Phone' },
];

export default function SearchContainer() {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (query) => {
        // Normalize the query to lowercase
        const lowerQuery = query.toLowerCase();

        // Filter results based on the search query
        const results = boxes
            .filter(box => box.title.toLowerCase().includes(lowerQuery))
            .map(box => ({ title: box.title, link: box.link }));

        // Update state with results or a no-results message
        setSearchResults(results.length > 0 ? results : [`No results found for "${query}"`]);
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
