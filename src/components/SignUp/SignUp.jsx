import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import SnapStore from '../../assets/SnapStore.png';

const SignUpLogin = ({ setShowLogin }) => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    localStorage.setItem('userFullName', fullName);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    setFullName('');
    setEmail('');
    setPassword('');
    setError('');
    setIsSignUpMode(false);
    alert('Account created successfully. Please log in.');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem('isLoggedIn', 'true'); // Save login status
      setShowLogin(true); // Update login status globally
      setError('');
      alert('Login successful');
      navigate('/dashboard'); // Redirect to dashboard
    } else {
      setError('Invalid email or password');
    }
  };

  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
    setFullName('');
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="absolute w-full bg-white min-h-full px-6 py-24 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-16 w-auto cursor-pointer" src={SnapStore} alt="SnapStore" />
      </div>

      <div className="mt-10 p-10 sm:mx-auto sm:w-full sm:max-w-sm shadow-lg border border-black rounded-md">
        <h2 className="text-center text-2xl leading-9 tracking-tight">
          {isSignUpMode ? 'Sign Up' : 'Sign In'}
        </h2>

        <form onSubmit={isSignUpMode ? handleSignUp : handleLogin} className="space-y-6">
          {error && (
            <p className="p-2 text-sm font-bold text-red-800 rounded-lg" role="alert">
              {error}
            </p>
          )}

          {isSignUpMode && (
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium leading-6">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
            />
          </div>

          <button type="submit" className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 text-white focus-visible:outline-offset-2 focus-visible:outline-orange-600">
            {isSignUpMode ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <div className="flex items-center justify-center mt-6">
          <button onClick={toggleMode} className="text-sm text-gray-500 underline">
            {isSignUpMode ? 'Already have an account? Sign In' : 'New to Snapstore? Create an account'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpLogin;
