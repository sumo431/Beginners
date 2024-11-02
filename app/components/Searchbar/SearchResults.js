import Link from 'next/link';

export default function SearchResults({ results = [] }) {
    if (results.length === 0) {
        return <p className="text-center">No results found.</p>;
    }

    return (
        <div className="w-full max-w-xl">
            <h2 className="text-2xl font-bold mb-4 text-center">Search Results:</h2>
            <div className="grid grid-cols-2 gap-4"> {/* Add grid styling for layout */}
                {results.map((result) => (
                    <Link href={`/${result.title.toLowerCase()}`} key={result.id} className="flex flex-col items-center bg-gray-800 p-4 rounded-lg hover:bg-blue-500 transition duration-200">
                        <img src={result.image} alt={result.title} className="w-full h-32 object-cover mb-2 rounded-md" />
                        <h2 className="text-lg font-semibold text-center text-white hover:text-black">{result.title}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
}
