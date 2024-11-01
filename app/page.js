'use client';

import { useEffect, useState } from 'react';
import SearchContainer from './components/Searchbar/SearchContainer'; // Adjust the import based on your file structure
import Link from 'next/link';
import EntryButton from './components/UserEntries/EntryButton'; // Import the EntryButton component

export default function HomePage() {
    const [boxesVisible, setBoxesVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setBoxesVisible(true);
        }, 100); // Delay for the animation effect
        return () => clearTimeout(timer);
    }, []);

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

            <EntryButton /> {/* Include the EntryButton here */}
        </div>
    );
}
