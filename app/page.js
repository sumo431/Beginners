'use client';

import { useEffect, useState } from 'react';
import Search from './components/Searchbar/Search'; // Import the new combined Search.js component
import Link from 'next/link';
import EntryButton from './components/UserEntries/EntryButton';
import PostForm from './components/PostForm'; // Import the PostForm component
import DeleteForm from './components/DeleteForm'; // Import the DeleteForm component

export default function HomePage() {
    const [posts, setPosts] = useState([]);

    // Fetch posts when the page is loaded or when localStorage has data
    useEffect(() => {
        // Check if there are any posts stored in localStorage
        const storedPosts = localStorage.getItem('posts');
        if (storedPosts) {
            setPosts(JSON.parse(storedPosts)); // If posts are stored, use them
        } else {
            const fetchPosts = async () => {
                const response = await fetch('http://127.0.0.1:8000/api/posts/');
                const data = await response.json();
                setPosts(data);
                // Store posts in localStorage for persistence
                localStorage.setItem('posts', JSON.stringify(data));
            };

            fetchPosts();
        }
    }, []);

    // Handle new post submission and update the posts list
    const handlePostCreated = (newPost) => {
        setPosts((prevPosts) => {
            const updatedPosts = [newPost, ...prevPosts];
            // Save updated posts to localStorage
            localStorage.setItem('posts', JSON.stringify(updatedPosts));
            return updatedPosts; // Add the new post to the list
        });
    };

    const handleDeletePost = async (postId) => {
        console.log("Deleting post with ID:", postId);  // Check if postId is correct

        // Send DELETE request to the backend API
        const response = await fetch(`http://127.0.0.1:8000/api/posts/${postId}/`, {
            method: 'DELETE',
        });

        // If the backend returns a success response
        if (response.ok) {
            console.log(`Post with ID ${postId} deleted successfully`);

            // Update frontend state to reflect the deletion
            setPosts((prevPosts) => {
                const updatedPosts = prevPosts.filter((post) => post.id !== postId);
                localStorage.setItem('posts', JSON.stringify(updatedPosts));
                return updatedPosts; // Remove the deleted post from state
            });

            alert('Post deleted successfully!');
        } else {
            const data = await response.json();
            console.error(`Failed to delete post. ${data.message || 'Unknown error'}`);
            alert(`Failed to delete post. ${data.message || ''}`);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-tan justify-center items-center">
            {/* Top Section */}
            <header className="bg-blue-600 text-white p-4 w-full flex flex-col items-center justify-center">
                {/* Title */}
                <h1 className="text-5xl font-bold mb-4 text-brown glow cursive-font">
                    BEGINNERS
                </h1>

                {/* Buttons Section (Positioned on the left) */}
                <div className="absolute top-4 left-4 flex gap-8">
                    {/* Log In Button */}
                    <Link
                        href="/login"
                        className="border border-brown text-white hover:bg-brown hover:text-white text-lg font-semibold py-2 px-4 rounded-md transition duration-200 ease-in-out"
                    >
                        Log In
                    </Link>
                    {/* Sign Up Button */}
                    <Link
                        href="/signup"
                        className="border border-brown text-white hover:bg-brown hover:text-white text-lg font-semibold py-2 px-4 rounded-md transition duration-200 ease-in-out"
                    >
                        Sign Up
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="p-4 w-full max-w-4xl flex flex-col items-center justify-center">
                <p className="mb-4 text-white text-center animate-fadeIn text-3xl">
                    Welcome!
                </p>

                {/* Search Bar and Results */}
                <div className="w-full max-w-xl mb-8">
                    <Search /> {/* This now renders the search functionality */}
                </div>

                {/* Post Form for Experts */}
                <div className="w-full max-w-xl mb-8">
                    <PostForm onPostCreated={handlePostCreated} /> {/* This renders the form to create posts */}
                </div>

                {/* Delete Form for Posts */}
                <div className="w-full max-w-xl mb-8">
                    <DeleteForm posts={posts} onDeletePost={handleDeletePost} /> {/* This renders the form to delete posts */}
                </div>

                {/* List of Posts */}
                <div className="w-full max-w-xl mb-8">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post.id} className="mb-4 p-4 bg-gray-100 rounded shadow-sm">
                                <h3 className="text-xl font-semibold">{post.title}</h3>
                                <p className="text-brown-700">{post.content}</p>
                            </div>
                        ))
                    ) : (
                        <p>No posts available</p>
                    )}
                </div>

                <EntryButton />
            </main>
        </div>
    );
}
