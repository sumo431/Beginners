'use client';

import SearchContainer from './components/Searchbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-mono mb-8 text-center">Beginner App</h1>
      <h1 className="text-4xl font-sans font-normal m-2 text-center">Free to use. Easy to try.</h1>
      <SearchContainer />
    </main>
  );
}
