'use client';

import React from 'react';
import Link from 'next/link';

export default function ClickPage() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="text-4xl font-bold mb-8 text-center">Welcome to the Click Page!</h1>

            {/* Button to go back to the Main Page */}
            <Link href="/">
                <button className="mt-8 p-2 bg-blue-500 text-white rounded">Back to Main Page</button>
            </Link>
        </main>
    );
}
