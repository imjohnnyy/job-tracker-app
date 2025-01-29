import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";
import { SignUp } from "../services/authentication";
import { useDispatch } from "react-redux";
import { setUserData } from '../redux/userSlice';

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    dispatch(setUserData(userData));

    SignUp(dispatch, { username, email, password, firstName, lastName });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-lightergray">
      <form
        className="w-full max-w-sm px-6 py-8 rounded-lg shadow-[0_0px_10px_rgba(0,0,0,0.25)] bg-white max-md:mx-6"
        onSubmit={handleSubmit}
      >
        {/* Logo */}
        <div className={"flex items-center justify-center"}>
          <img src={Logo} alt="Logo" className="w-[175px] h-[60px] static" />
        </div>

        <h2 className="mb-6 text-2xl font-semibold text-gray">
          Create your account
        </h2>

        {/* Register Labels and Text Inputs*/}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="flex items-start mb-2 font-medium text-gray"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="flex items-start mb-2 font-medium text-gray"
          >
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
          <label
            htmlFor="firstName"
            className="flex items-start mb-2 font-medium text-gray"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="flex items-start mb-2 font-medium text-gray"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="flex items-start mb-2 font-medium text-gray"
          >
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

        {/* 'Create account' button */}
        <div className="flex items-center justify-between py-2">
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
            Create account
          </button>
        </div>

        <div className="mt-4">
          <p>
            Have an existing account?{" "}
            <a href="/login" className="text-blue-500 hover:text-blue-700">
              Sign in
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
