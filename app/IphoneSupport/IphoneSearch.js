'use client';

export default function IphoneSearch({ searchQuery, setSearchQuery, handleSearch }) {
    return (
        <form onSubmit={handleSearch} className="w-full max-w-md flex space-x-4">
            <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2 rounded-lg text-black"
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Search
            </button>
        </form>
    );
}
