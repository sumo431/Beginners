import { useState } from 'react';

export default function PostForm({ onPostCreated }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ensure to specify the full API URL without trailing slash
        const response = await fetch('http://127.0.0.1:8000/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                content,
            }),
        });

        if (response.ok) {
            const newPost = await response.json();  // Get the created post from the response
            setTitle(''); // Reset form fields
            setContent('');
            onPostCreated(newPost); // Trigger the parent callback to refresh the posts
            alert('Post created successfully!');
        } else {
            alert('Failed to create post.');
        }
    };

    return (
        <div className="w-full max-w-xl mx-auto p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter post title"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-gray-700">Content</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter post content"
                    />
                </div>
                <button type="submit" className="w-full py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">
                    Submit Post
                </button>
            </form>
        </div>
    );
}
