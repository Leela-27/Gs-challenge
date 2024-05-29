import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LoginInputField } from '../Components/InputField';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('signupData'));
    if (storedData) {
      if (formData.username === storedData.name && formData.password === storedData.password) {
        localStorage.setItem('loginData', JSON.stringify(formData));
        setError('');
        navigate('/movies');
        setFormData({ username: '', password: '' });
      } else {
        setError('Invalid credentials');
      }
    } else {
      setError('No user data found. Please sign up first.');
    }
    
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-6">Login Form</h2>
      <LoginInputField
        label="Username"
        type="text"
        name="username"
        id="username"
        value={formData.username}
        onChange={handleChange}
        aria-label="Username"
      />
      <LoginInputField
        label="Password"
        type="password"
        name="password"
        id="password"
        value={formData.password}
        onChange={handleChange}
        aria-label="Password"
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        aria-label="Log In"
      >
        Log In
      </button>
      <p className="mt-4">
        Don't have an account?{' '}
        <Link to="/" className="text-blue-500 hover:text-blue-700" aria-label="Sign Up">Sign Up</Link>
      </p>
    </form>
  );
};

export default LoginForm;
