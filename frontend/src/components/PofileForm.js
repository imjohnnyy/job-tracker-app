import React, { useState, useEffect } from "react";
import axios from "axios";
import { UpdateProfile } from "../services/profile";
import { useDispatch, useSelector } from "react-redux";

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.userSlice.userData);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the UpdateProfile service
    UpdateProfile(dispatch, formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Fetch user data from the API
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = sessionStorage.getItem("token");

        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/Profile/${user.email}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setFormData({
          id: response.data.id,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col items-center justify-center bg-lightergray">
      <form
        className="w-full md:w-1/3 max-w-2xl px-6 py-8 bg-white rounded-lg shadow-[0_0px_10px_rgba(0,0,0,0.25)]"
        onSubmit={handleSubmit}
      >
        {/* First Name Input */}
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block mb-2 font-medium text-left text-gray"
          >
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
          <label
            htmlFor="lastName"
            className="block mb-2 font-medium text-left text-gray"
          >
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
          <label
            htmlFor="email"
            className="block mb-2 font-medium text-left text-gray"
          >
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
