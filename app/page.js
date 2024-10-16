'use client';

import SearchContainer from './components/Searchbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-sm font-sans mb-4 text-center">Beginner App</h1>
      <h1 className="text6xl font-sans font-normal text-center">Start everything from here</h1>
      <h1 className="text-xl font-sans font-normal m-0 text-center">Free to use. Easy to try.</h1>
      <SearchContainer />
    </main>
  );
}
