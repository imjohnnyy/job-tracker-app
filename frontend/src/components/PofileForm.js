import React, { useState, useEffect } from "react";
import axios from "axios";
import { UpdateProfile } from "../services/profile";
import { useDispatch, useSelector } from "react-redux";

const ProfileForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userSlice.userData);
  const profile = useSelector((state) => state.profileSlice.profile);

  const [formData, setFormData] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await UpdateProfile(dispatch, formData); // Wait for update to complete
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = sessionStorage.getItem("token");

        if (!user?.email) return;

        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/Profile/${user.email}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const userData = {
          id: response.data.id || profile.id,
          firstName: response.data.firstName || "",
          lastName: response.data.lastName || "",
          email: response.data.email || "",
        };

        setFormData(userData);
        sessionStorage.setItem("userData", JSON.stringify(userData));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [user]);

  // Sync formData with profile after an update
  useEffect(() => {
    if (profile) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        firstName: profile.firstName || prevFormData.firstName,
        lastName: profile.lastName || prevFormData.lastName,
        email: profile.email || prevFormData.email,
      }));
    }
  }, [profile]); // Runs when profile updates after submitting

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col items-center justify-center bg-lightergray">
      <form
        className="w-full md:w-1/3 max-w-2xl px-6 py-8 bg-white rounded-lg shadow-[0_0px_10px_rgba(0,0,0,0.25)] mt-24 max-md:mt-12"
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
            placeholder={profile.firstName || formData.firstName}
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
            placeholder={profile.lastName || formData.lastName}
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
            placeholder={profile.email || formData.email}
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
