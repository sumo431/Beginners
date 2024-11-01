import Link from 'next/link';

export default function SearchResults({ results = [] }) { // Default to empty array
    if (results.length === 0) {
        return <p className="text-center">No results found.</p>;
    }

    return (
        <div className="w-full max-w-xl">
            <h2 className="text-2xl font-bold mb-4 text-center">Search Results:</h2>
            <ul className="list-disc pl-5">
                {results.map((result) => (
                    <li key={result.id} className="flex items-center mb-4">
                        <Link href={`/${result.title.toLowerCase()}`}>
                            <img
                                src={result.image}
                                alt={result.title}
                                className="w-16 h-16 mr-3 cursor-pointer" // Added cursor-pointer for better UX
                            />
                            <span className="cursor-pointer">{result.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
