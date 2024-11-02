'use client';

import { useState } from 'react';
import Link from 'next/link';
import Searchbar from './Searchbar';

export default function SearchContainer() {
    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState(""); // Add a state for the search query

    const boxes = [
        { id: 1, title: 'iPhone', image: '/pictures/iphone.jpg', link: '/iphone' },
        { id: 2, title: 'Cooking', image: '/pictures/cooking.jpg', link: '/cooking' },
        { id: 3, title: 'Guitar', image: '/pictures/guitar.jpg', link: '/guitar' },
        { id: 4, title: 'Grilling', image: '/pictures/grilling.jpg', link: '/grilling' },
        { id: 5, title: 'Math', image: '/pictures/math.jpg', link: '/math' },
        { id: 6, title: 'Game Develop', image: '/pictures/gamedevelop.jpg', link: '/gamedevelop' }
    ];

    const handleSearch = (query) => {
        setQuery(query); // Update the query state
        const filteredBoxes = boxes.filter(box =>
            box.title.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredBoxes);
    };

    return (
        <div>
            <Searchbar onSearch={handleSearch} />
            <div className="mt-4 w-full max-w-4xl">
                {query && searchResults.length === 0 ? ( // Show message only if there's a query and no results
                    <p className="text-center text-white mb-4 font-bold text-3xl"> {/* Increased size to text-3xl */}
                        No results found. Here are some recommendations:
                    </p>
                ) : null}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {searchResults.length > 0 ? (
                        searchResults.map(box => (
                            <Link
                                href={box.link}
                                key={box.id}
                                className="flex flex-col items-center bg-gray-800 p-4 rounded-lg hover:bg-blue-500 transition duration-200 transform hover:scale-105"
                            >
                                <img src={box.image} alt={box.title} className="w-full h-32 object-cover mb-2 rounded-md" />
                                <h2 className="text-lg font-semibold text-center text-white hover:text-black">{box.title}</h2>
                            </Link>
                        ))
                    ) : (
                        boxes.map(box => ( // Show all boxes when no search results
                            <Link
                                href={box.link}
                                key={box.id}
                                className="flex flex-col items-center bg-gray-800 p-4 rounded-lg hover:bg-blue-500 transition duration-200 transform hover:scale-105"
                            >
                                <img src={box.image} alt={box.title} className="w-full h-32 object-cover mb-2 rounded-md" />
                                <h2 className="text-lg font-semibold text-center text-white hover:text-black">{box.title}</h2>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
