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

<<<<<<< HEAD
            {/* Boxes Section */}
            <div className="grid grid-cols-2 gap-4 mt-8">
                {/* Box 1 */}
                <div className="border p-4 h-64 relative">
                    <Link href="/cooking">
                        <h2 className="text-2xl text-white mb-2">Easy Cooking Recipes for Beginners</h2>
                        <Image src="/pictures/cooking.jpg" alt="Cooking" layout="responsive" width={500} height={300} className="object-cover" />
                    </Link>
                </div>

                {/* Box 2 */}
                <div className="border p-4 h-64 relative">
                    <Link href="/gamedevelop">
                        <h2 className="text-2xl text-white mb-2">Introduction to Game Development</h2>
                        <Image src="/pictures/gamedevelop.jpg" alt="Game Developing" layout="responsive" width={500} height={300} className="object-cover" />
                    </Link>
                </div>

                {/* Box 3 */}
                <div className="border p-4 h-64 relative">
                    <Link href="/guitar">
                        <h2 className="text-2xl text-white mb-2">Beginner's Guide to Playing Guitar</h2>
                        <Image src="/pictures/guitar.jpg" alt="Guitar" layout="responsive" width={500} height={300} className="object-cover" />
                    </Link>
                </div>

                {/* Box 4 */}
                <div className="border p-4 h-64 relative">
                    <Link href="/grilling">
                        <h2 className="text-2xl text-white mb-2">Grilling Tips for Newbies</h2>
                        <Image src="/pictures/grilling.jpg" alt="Grilling" layout="responsive" width={500} height={300} className="object-cover" />
                    </Link>
                </div>

                {/* Box 5 */}
                <div className="border p-4 h-64 relative">
                    <Link href="/math">
                        <h2 className="text-2xl text-white mb-2">Math Made Simple for Beginners</h2>
                        <Image src="/pictures/math.jpg" alt="Math" layout="responsive" width={500} height={300} className="object-cover" />
                    </Link>
                </div>

                {/* Box 6 */}
                <div className="border p-4 h-64 relative">
                    <Link href="/Phone">
                        <h2 className="text-2xl text-white mb-2">Getting Started with Your iPhone</h2>
                        <Image src="/pictures/iphone.jpg" alt="Using an iPhone" layout="responsive" width={500} height={300} className="object-cover" />
                    </Link>
                </div>
=======
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
>>>>>>> 469f44b89e07ebdac17a78ad6cc0fc7b80bd74ac
            </div>

            <EntryButton /> {/* Include the EntryButton here */}
        </div>
    );
}
