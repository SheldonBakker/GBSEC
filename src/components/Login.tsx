import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      localStorage.setItem('token', response.data.token);
      setError('');
      // Navigate to a protected page
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Login</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <form className="mt-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm">Username</label>
            <input
              id="username"
              type="text"
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:border-indigo-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="block text-sm">Password</label>
            <input
              id="password"
              type="password"
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:border-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:bg-indigo-700"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
