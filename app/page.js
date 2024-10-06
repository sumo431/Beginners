// pages/_app.js (or pages/index.js if you don't have _app.js)
'use client';

import SearchContainer from './components/Searchbar';
import PlusButton from './components/UserEntries/EntryButton';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8 text-center">Beginner App</h1>
      <SearchContainer />
      <PlusButton setIsOpen={setIsOpen} isOpen={isOpen} />
    </main>
  );
}
