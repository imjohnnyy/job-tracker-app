import React, { useState } from 'react';
import Logo from "../assets/images/logo.svg";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    // Need to add Submit form logic
  };

  return (
    <div className="flex items-center justify-center h-screen bg-lightergray">
      <form className="w-full max-w-sm px-6 py-8 rounded-lg shadow-[0_0px_10px_rgba(0,0,0,0.25)] bg-white" onSubmit={handleSubmit}>

        {/* Logo */}
        <div className={"flex items-center justify-center"}>
            <img src={Logo} alt="Logo" className="w-[175px] h-[60px] static" />
        </div>
        
        <h2 className="mb-6 text-2xl font-semibold text-gray">Sign in to your account</h2>
        <div className="mb-4">
          <label htmlFor="email" className="flex items-start mb-2 font-medium text-gray">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="flex items-start mb-2 font-medium text-gray">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between py-2">
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
        <div className="mt-4">
            <p>Don't have an account? <a href="/register" className="text-blue-500 hover:text-blue-700">Sign up</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
