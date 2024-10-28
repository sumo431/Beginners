'use client';


import SearchContainer from './components/Searchbar';

export default function Home(){
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-black">
      <h1 className="text-sm font-helvetica-w02-light mb-4 text-white text-center">Beginner App</h1>
      <h2 className="text-3xl font-sans font-normal m-0 text-white text-center">Start everything from here</h2>
      <SearchContainer />
      <h2 className="text-xl font-sans font-normal m-0 text-white text-center">Free to use. Easy to try.</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/lJIrF4YjHfQ?si=KcaYzxCnH3sowKQ-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </main>
    
  );
}