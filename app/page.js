'use client';

import { useEffect, useState } from 'react';
import Search from './components/Searchbar/Search'; // Import the new combined Search.js component
import Link from 'next/link';
import EntryButton from './components/UserEntries/EntryButton';
import PostForm from './components/PostForm'; // Import the PostForm component

export default function HomePage() {
    const [posts, setPosts] = useState([]);

    // Fetch posts when the page is loaded
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/posts/');
            const data = await response.json();
            setPosts(data);
        };

        fetchPosts();
    }, []);

    // Handle new post submission and update the posts list
    const handlePostCreated = (newPost) => {
        setPosts((prevPosts) => [newPost, ...prevPosts]);  // Add the new post to the list
    };

    // Handle deleting a post
    const handleDeletePost = async (postId) => {
        console.log("Deleting post with ID:", postId);  // Debugging line
        const response = await fetch(`http://127.0.0.1:8000/api/posts/${postId}/`, {
            method: 'DELETE',
        });

        const data = await response.json();  // Capture the response body

        console.log(data);  // Log the response body for debugging

        if (response.ok) {
            setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));  // Remove the post from state
            alert('Post deleted successfully!');
        } else {
            alert(`Failed to delete post. ${data.message || ''}`);
        }
    };
    return (
        <div className="p-4 bg-black min-h-screen flex flex-col items-center relative">
            <h1 className="text-5xl font-bold mb-4 text-white glow cursive-font">Beginners</h1>
            <p className="mb-4 text-white text-center animate-fadeIn text-3xl">
                Welcome!
            </p>

            {/* Login Button */}
            <Link href="/login" className="absolute top-4 left-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
            </Link>

            {/* Sign Up Button */}
            <Link href="/signup" className="absolute top-4 left-24 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Sign Up
            </Link>

            {/* Search Bar and Results */}
            <div className="w-full max-w-xl mb-8">
                <Search /> {/* This now renders the search functionality */}
            </div>

            {/* Post Form for Experts */}
            <div className="w-full max-w-xl mb-8">
                <PostForm onPostCreated={handlePostCreated} /> {/* This renders the form to create posts */}
            </div>

            {/* List of Posts */}
            <div className="w-full max-w-xl mb-8">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post.id} className="mb-4 p-4 bg-gray-100 rounded shadow-sm">
                            <h3 className="text-xl font-semibold">{post.title}</h3>
                            <p className="text-gray-700">{post.content}</p>
                            <button
                                onClick={() => handleDeletePost(post.id)}
                                className="mt-2 text-red-500 hover:text-red-700"
                            >
                                Delete Post
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No posts available</p>
                )}
            </div>

            <EntryButton />
        </div>
    );
}
