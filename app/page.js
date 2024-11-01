'use client';

import SearchContainer from './components/Searchbar';
import PlusButton from './components/UserEntries/EntryButton';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="text-4xl font-bold mb-8 text-center text-white">Beginner App</h1>
            <SearchContainer />
            <PlusButton setIsOpen={setIsOpen} isOpen={isOpen} />

            {/* Boxes Section */}
            <div className="grid grid-cols-2 gap-4 mt-8">
                {/* Box 1 */}
                <div className="border p-4">
                    <Link href="/cooking">
                        <h2 className="text-2xl text-white mb-2">Easy Cooking Recipes for Beginners</h2>
                        <Image src="/pictures/cooking.jpg" alt="Cooking" layout="responsive" width={500} height={300} className="object-cover" />
                    </Link>
                </div>

                {/* Box 2 */}
                <div className="border p-4">
                    <Link href="/gamedevelop">
                        <h2 className="text-2xl text-white mb-2">Introduction to Game Development</h2>
                        <Image src="/pictures/gamedevelop.jpg" alt="Game Developing" layout="responsive" width={500} height={300} className="object-cover" />
                    </Link>
                </div>

                {/* Box 3 */}
                <div className="border p-4">
                    <Link href="/guitar">
                        <h2 className="text-2xl text-white mb-2">Beginner's Guide to Playing Guitar</h2>
                        <Image src="/pictures/guitar.jpg" alt="Guitar" layout="responsive" width={500} height={300} className="object-cover" />
                    </Link>
                </div>

                {/* Box 4 */}
                <div className="border p-4">
                    <Link href="/grilling">
                        <h2 className="text-2xl text-white mb-2">Grilling Tips for Newbies</h2>
                        <Image src="/pictures/grilling.jpg" alt="Grilling" layout="responsive" width={500} height={300} className="object-cover" />
                    </Link>
                </div>

                {/* Box 5 */}
                <div className="border p-4">
                    <Link href="/math">
                        <h2 className="text-2xl text-white mb-2">Math Made Simple for Beginners</h2>
                        <Image src="/pictures/math.jpg" alt="Math" layout="responsive" width={500} height={300} className="object-cover" />
                    </Link>
                </div>

                {/* Box 6 */}
                <div className="border p-4">
                    <Link href="/Phone">
                        <h2 className="text-2xl text-white mb-2">Getting Started with Your iPhone</h2>
                        <Image src="/pictures/iphone.jpg" alt="Using an iPhone" layout="responsive" width={500} height={300} className="object-cover" />
                    </Link>
                </div>
            </div>
        </main>
    );
}
