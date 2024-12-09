import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

const QueryAi = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(`${BASE_URL}/ai/chat?text=${query}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true, // Allows sending cookies with the request
      });
      const aiResponseText = data || 'No response text available';

      setResponse(aiResponseText); // Update the response state with the data received from the AI API
    } catch (err) {
      setError('Error fetching response');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-center mb-4">Ask AI Query</h2>
      <form onSubmit={handleQuerySubmit}>
        <input
          type="text"
          value={query}
          onChange={handleQueryChange}
          placeholder="Enter your query"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit" 
          disabled={loading}
          className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      {response && (
        <div className="mt-6 p-4 bg-gray-100 border border-gray-300 rounded-lg">
         
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default QueryAi;
