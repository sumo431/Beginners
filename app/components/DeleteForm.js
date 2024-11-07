import { useState } from 'react';

export default function DeleteForm({ posts, onPostDeleted }) {
    const [selectedPostId, setSelectedPostId] = useState('');

    const handleDelete = async (e) => {
        e.preventDefault();

        // Ensure a post is selected before attempting to delete
        if (!selectedPostId) {
            alert('Please select a post to delete.');
            return;
        }

        // Send DELETE request to the backend API
        const response = await fetch(`http://127.0.0.1:8000/api/posts/${selectedPostId}/`, {
            method: 'DELETE',
        });

        if (response.ok) {
            onPostDeleted(selectedPostId); // Trigger the parent callback to refresh the posts list
            alert('Post deleted successfully!');
            setSelectedPostId(''); // Reset the selection
        } else {
            const data = await response.json();
            alert(`Failed to delete post. ${data.message || ''}`);
        }
    };

    return (
        <div className="w-full max-w-xl mx-auto p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Delete a Post</h2>
            <form onSubmit={handleDelete}>
                <div className="mb-4">
                    <label htmlFor="post-select" className="block text-gray-700">Select Post to Delete</label>
                    <select
                        id="post-select"
                        value={selectedPostId}
                        onChange={(e) => setSelectedPostId(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">Select a post</option>
                        {posts.map((post) => (
                            <option key={post.id} value={post.id}>
                                {post.title}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="w-full py-2 bg-red-500 hover:bg-red-700 text-white rounded">
                    Delete Post
                </button>
            </form>
        </div>
    );
}
