import { useState } from "react";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <header className="mb-8">
        <div className="flex space-x-4">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img
              src={viteLogo}
              className="h-16 w-16 transition-transform duration-300 hover:scale-110"
              alt="Vite logo"
            />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-16 w-16 transition-transform duration-300 hover:scale-110"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React logo"
            />
          </a>
        </div>
      </header>

      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">Vite + React</h1>
        <div className="card p-6 bg-white shadow-md rounded-lg">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Count is {count}
          </button>
          <p className="mt-4 text-gray-600">
            Edit <code className="px-2 py-1 bg-gray-200 rounded">src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs mt-6 text-sm text-gray-500">
          Click on the Vite and React logos to learn more
        </p>
      </main>
    </div>
  );
}

export default App;
