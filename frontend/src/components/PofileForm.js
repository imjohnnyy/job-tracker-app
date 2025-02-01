import React, { useState } from "react";
import { UpdateProfile } from "../services/profile";
import { useDispatch, useSelector } from "react-redux";

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const dispatch = useDispatch();

  const user = useSelector((state) => state.userSlice.userData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data ' + JSON.stringify(formData));

    UpdateProfile(dispatch, {firstName: formData.firstName, lastName: formData.lastName, email: formData.email});


  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-lightergray">
      <form className="w-full md:w-1/3 max-w-2xl px-6 py-8 bg-white rounded-lg shadow-[0_0px_10px_rgba(0,0,0,0.25)]" onSubmit={handleSubmit}>
        {/* First Name Input */}
        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-2 font-medium text-left text-gray">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            placeholder={user.firstName}
            className="w-full px-3 py-2 border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
            onChange={handleChange}
          />
        </div>

        {/* Last Name Input */}
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2 font-medium text-left text-gray">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            placeholder={user.lastName}
            className="w-full px-3 py-2 border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
            onChange={handleChange}
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium text-left text-gray">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            placeholder={user.email}
            className="w-full px-3 py-2 border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
