'use client';

import { useState } from 'react';
import Searchbar from './Searchbar';
import SearchResults from './SearchResults';

export default function SearchContainer() {
    const [searchResults, setSearchResults] = useState([]);

    // Define the data structure for the boxes
    const boxes = [
        { id: 1, title: 'iPhone', image: '/pictures/iphone.jpg' },
        { id: 2, title: 'Cooking', image: '/pictures/cooking.jpg' },
        { id: 3, title: 'Guitar', image: '/pictures/guitar.jpg' },
        { id: 4, title: 'Grilling', image: '/pictures/grilling.jpg' },
        { id: 5, title: 'Math', image: '/pictures/math.jpg' },
        { id: 6, title: 'Game Develop', image: '/pictures/gamedevelop.jpg' }
    ];

    const handleSearch = (query) => {
        const filteredResults = boxes.filter(box =>
            box.title.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredResults);
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
