'use client';

import { useState } from 'react';
import Link from 'next/link';
import Searchbar from './Searchbar';

export default function SearchContainer() {
    const [searchResults, setSearchResults] = useState([]);

    const boxes = [
        { id: 1, title: 'iPhone', image: '/pictures/iphone.jpg', link: '/iphone' },
        { id: 2, title: 'Cooking', image: '/pictures/cooking.jpg', link: '/cooking' },
        { id: 3, title: 'Guitar', image: '/pictures/guitar.jpg', link: '/guitar' },
        { id: 4, title: 'Grilling', image: '/pictures/grilling.jpg', link: '/grilling' },
        { id: 5, title: 'Math', image: '/pictures/math.jpg', link: '/math' },
        { id: 6, title: 'Game Develop', image: '/pictures/gamedevelop.jpg', link: '/gamedevelop' }
    ];

    const handleSearch = (query) => {
        const filteredBoxes = boxes.filter(box =>
            box.title.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredBoxes);
    };

    return (
        <div>
            <Searchbar onSearch={handleSearch} />
            <div className="flex flex-col gap-4 mt-4 w-full max-w-4xl">
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
                    <div className="border-2 border-yellow-500 p-4 rounded-lg mt-4">
                        <p className="text-yellow-400 text-center mb-2">No matches found. Here are our recommendations for you:</p>
                        <div className="flex flex-col gap-4">
                            {boxes.map(box => (
                                <Link
                                    href={box.link}
                                    key={box.id}
                                    className="flex flex-col items-center bg-gray-800 p-4 rounded-lg hover:bg-blue-500 transition duration-200 transform hover:scale-105"
                                >
                                    <img src={box.image} alt={box.title} className="w-full h-32 object-cover mb-2 rounded-md" />
                                    <h2 className="text-lg font-semibold text-center text-white hover:text-black">{box.title}</h2>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
