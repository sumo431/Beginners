import Link from 'next/link';

export default function SearchResults({ results }) {
    if (results.length === 0) {
        return null;
    }

    return (
        <div className="w-full max-w-xl">
            <h2 className="text-2xl font-bold mb-4 text-center">Search Results:</h2>
            <ul className="list-disc pl-5">
                {results.map((result, index) => (
                    <li key={index}>
                        <Link href={result.link} className="text-blue-500 hover:underline">
                            {result.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
