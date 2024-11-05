// pages/login.js
export default function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-300">Username</label>
                        <input type="text" className="w-full p-2 border border-gray-500 rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300">Password</label>
                        <input type="password" className="w-full p-2 border border-gray-500 rounded" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
