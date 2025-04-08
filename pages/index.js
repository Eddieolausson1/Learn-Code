import { useState } from 'react';
import { useRouter } from 'next/router';

const Homepage = () => {
  const [query, setQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    if (!isLoggedIn) {
      alert('Please log in to view the results.');
    } else {
      router.push(`/search?query=${query}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <div className="text-2xl font-bold">LearnCode</div>
          <div>
            {!isLoggedIn ? (
              <button
                className="px-4 py-2 bg-green-500 rounded text-white"
                onClick={() => setIsLoggedIn(true)}
              >
                Login / Sign Up
              </button>
            ) : (
              <span className="text-white">Welcome back!</span>
            )}
          </div>
        </nav>
      </header>

      <main className="container mx-auto p-8">
        <h1 className="text-4xl text-center mb-6">Learn to Code, Start Now!</h1>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search coding resources..."
            className="p-4 w-1/2 border rounded-lg"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="ml-4 px-6 py-4 bg-blue-500 text-white rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <p className="mt-4 text-center text-gray-500">
          Login to access all resources and personalized content.
        </p>
      </main>

      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>&copy; 2025 LearnCode. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
