import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { SignUpInputField } from "../Components/InputField";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    profession: 'Select your profession',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    localStorage.setItem('signupData', JSON.stringify(formData));
    setSuccessMessage('Sign up successful!');
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-6">Sign Up Form</h2>
        <SignUpInputField
          label="Name"
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          ariaLabel="Name"
        />
        <SignUpInputField
          label="Email"
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          ariaLabel="Email"
        />
        <SignUpInputField
          label="Password"
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          ariaLabel="Password"
        />
        <SignUpInputField
          label="Phone Number"
          type="text"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          ariaLabel="Phone Number"
        />
        <SignUpInputField
          label="Profession"
          type="select"
          name="profession"
          id="profession"
          value={formData.profession}
          onChange={handleChange}
          options={[
            'Select your profession',
            'Software Engineer',
            'Teacher',
            'Doctor',
            'DevOps Engineer',
            'Designer',
            'Product Manager',
            'Other',
          ]}
          ariaLabel="Profession"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          ariaLabel="Sign Up"
        >
          Sign Up
        </button>
        {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
        <p className="mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:text-blue-700" ariaLabel="Log In">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;