'use client';

import SearchContainer from './components/Searchbar';

export default function Home(){
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-black">
      <h1 className="text-sm font-sans mb-4 text-white text-center">Beginner App</h1>
      <h2 className="text-3xl font-sans font-normal m-0 text-white text-center">Start everything from here</h2>
      <SearchContainer />
      <h2 className="text-xl font-sans font-normal m-0 text-white text-center">Free to use. Easy to try.</h2>
    </main>
  );
}