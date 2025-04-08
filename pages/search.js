import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const SearchPage = () => {
  const router = useRouter();
  const { query } = router.query;

  const [resources, setResources] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (query) {
      // Simulate fetching resources
      setResources([
        { title: 'Learn React', description: 'A beginner guide to React.js' },
        { title: 'JavaScript Basics', description: 'Learn JavaScript from scratch' },
        { title: 'Python for Data Science', description: 'Introduction to Python for Data Science' },
      ]);
    }
  }, [query]);

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
        <h1 className="text-4xl text-center mb-6">Search Results</h1>
        {resources.length > 0 ? (
          <div className="space-y-4">
            {resources.map((resource, index) => (
              <div key={index} className="p-6 bg-white border border-gray-300 rounded-lg">
                <h2 className="text-2xl font-semibold">{resource.title}</h2>
                <p className="mt-2 text-gray-600">{resource.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No resources found for "{query}"</p>
        )}
      </main>

      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>&copy; 2025 LearnCode. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SearchPage;
