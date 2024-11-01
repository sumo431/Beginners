'use client';

import SearchContainer from './components/Searchbar/SearchContainer'; // Adjust the import based on your file structure
import Link from 'next/link';
import EntryButton from './components/UserEntries/EntryButton'; // Import the EntryButton component

export default function HomePage() {
    const boxes = [
        { id: 1, title: 'iPhone', image: '/pictures/iphone.jpg', link: '/iphone' },
        { id: 2, title: 'Cooking', image: '/pictures/cooking.jpg', link: '/cooking' },
        { id: 3, title: 'Guitar', image: '/pictures/guitar.jpg', link: '/guitar' },
        { id: 4, title: 'Grilling', image: '/pictures/grilling.jpg', link: '/grilling' },
        { id: 5, title: 'Math', image: '/pictures/math.jpg', link: '/math' },
        { id: 6, title: 'Game Develop', image: '/pictures/gamedevelop.jpg', link: '/gamedevelop' }
    ];

    return (
        <div className="p-4 bg-black min-h-screen flex flex-col items-center relative"> {/* Center the content */}
            <h1 className="text-3xl font-bold mb-4 text-white">Beginners</h1> {/* Change title to "Beginners" */}
            <p className="mb-4 text-white text-center">Click on any of the boxes below to explore different themes:</p>

            {/* Login Button */}
            <Link href="/login" className="absolute top-4 left-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
            </Link>

            {/* Sign Up Button */}
            <Link href="/signup" className="absolute top-4 left-24 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Sign Up
            </Link>

            <div className="w-full max-w-xl mb-8"> {/* Set width for search container */}
                <SearchContainer /> {/* Include the SearchContainer here */}
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 w-full max-w-4xl"> {/* Set a max width for the grid */}
                {boxes.map(box => (
                    <Link href={box.link} key={box.id} className="flex flex-col items-center bg-gray-800 p-4 rounded-lg hover:bg-blue-500 transition duration-200">
                        <img src={box.image} alt={box.title} className="w-full h-32 object-cover mb-2 rounded-md" />
                        <h2 className="text-lg font-semibold text-center text-white hover:text-black">{box.title}</h2>
                    </Link>
                ))}
            </div>
            <EntryButton /> {/* Include the EntryButton here */}
        </div>
    );
}
