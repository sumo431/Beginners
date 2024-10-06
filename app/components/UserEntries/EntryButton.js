import { useState } from 'react';

export default function Entry() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Title:', title);
    console.log('Text:', text);
    setIsOpen(false);
  };

  return (
    <div>
      <button
        className = "fixed bottom-4 right-4 flex-shrink-0 bg-blue-500 hover:bg-blue-700 text-white text-2xl py-2 px-3 rounded-full"
        onClick={() => setIsOpen(true)}
      >
        +
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded w-1/2">
            <h1 className="text-2xl text-gray-700 font-bold mb-2">Text Entry</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-4 border border-gray-400 rounded bg-gray-800 text-gray-200"
                  placeholder="Enter title here..."
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Text Entry</label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="w-full p-4 border border-gray-400 rounded bg-gray-800 text-gray-200"
                  placeholder="Enter text here..."
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
              <button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}