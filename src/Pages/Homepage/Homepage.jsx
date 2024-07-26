import React from 'react';
import techhiveicon from '../../assets/logo _nobg.svg'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-purple-600">
      <div className="text-center">
        <img 
          src={techhiveicon}
          alt="Logo" 
          className="w-32 h-32 mx-auto mb-8"
        />
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to Our App</h1>
        <p className="text-xl text-white italic mb-8">
          "Innovation distinguishes between a leader and a follower."
        </p>
        <Link to="/login">
        <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-blue-100 transition duration-300">
          Login
        </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;