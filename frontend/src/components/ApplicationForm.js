// This is a form component for the user to submit their job application details.

import React, { useEffect, useState } from "react";
import { NewApplication } from "../services/applications";
import { useDispatch, useSelector } from "react-redux";

const ApplicationForm = ({ application, setIsEditing }) => {
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    date: "",
    jobStatus: "",
    jobType: "",
    city: "",
  });
  const [isNewApplication, setIsNewApplication] = useState(true);
  const [submittedData, setSubmittedData] = useState([]);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userSlice.userData);

  // Every time the application prop changes, the form is updated
  useEffect(() => {
    if (application !== undefined) {
      setIsNewApplication(false);
      setFormData({
        company: application.company,
        position: application.position,
        date: application.date,
        jobStatus: application.jobStatus,
        jobType: application.jobType,
        city: application.city,
      });
    } else {
      setIsNewApplication(true);
    }
  }, [application]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setSubmittedData([...submittedData, formData]);

    // Reset the form fields
    setFormData({
      company: "",
      position: "",
      date: "",
      jobStatus: "",
      jobType: "",
      city: "",
    });

    if (isNewApplication) {
      NewApplication(
        dispatch,
        {
          company: formData.company,
          position: formData.position,
          date: formData.date,
          jobStatus: formData.jobStatus,
          jobType: formData.jobType,
          city: formData.city,
        },
        {
          id: 0,
          username: user.username,
          password: user.password,
          email: user.email,
        }
      );
    } else {
      setIsEditing(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div
      className="flex flex-col items-center justify-center bg-lightergray"
      onSubmit={handleSubmit}
    >
      {/* Form */}
      <form class="w-full max-w-2xl px-6 py-8 rounded-lg shadow-[0_0px_10px_rgba(0,0,0,0.25)] bg-white">
        {/* Form Labels and Inputs*/}
        <div class="flex flex-col md:flex-row md:space-x-4">
          {/* Company Input */}
          <div class="w-full md:w-1/3 pr-4 mb-4 md:mb-0 max-md:pr-0">
            <label
              htmlFor="company"
              class="flex items-start mb-2 font-medium text-gray"
            >
              {" "}
              Company{" "}
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              class="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
              onChange={handleChange}
              required
            />
          </div>

          {/* Job Position Input */}
          <div class="w-full md:w-1/3 pr-4 mb-4 md:mb-0 max-md:pr-0">
            <label
              htmlFor="position"
              class="flex items-start mb-2 font-medium text-gray"
            >
              {" "}
              Position{" "}
            </label>
            <input
              type="text"
              id="position"
              value={formData.position}
              class="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
              onChange={handleChange}
              required
            />
          </div>

          {/* City Input */}
          <div class="w-full md:w-1/3 mb-4 md:mb-0">
            <label
              htmlFor="city"
              class="flex items-start mb-2 font-medium text-gray"
            >
              {" "}
              City{" "}
            </label>
            <input
              type="text"
              id="city"
              value={formData.city}
              class="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Job Type Drop-down List */}
        <div class="flex flex-col md:flex-row md:space-x-4">
          <div class="w-full md:w-1/3 pr-4 mb-4 md:mb-0 max-md:pr-0">
            <label
              htmlFor="jobType"
              class="flex items-start mb-2 font-medium text-gray"
            >
              {" "}
              Job Type{" "}
            </label>
            <select
              id="jobType"
              type="text"
              value={formData.jobType}
              onChange={handleChange}
              class="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
              required
            >
              <option value="">Select job type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Casual">Casual</option>
            </select>
          </div>

          {/* Job Status Drop-down List */}
          <div class="w-full md:w-1/3 pr-4 mb-4 md:mb-0 max-md:pr-0">
            <label
              htmlFor="jobStatus"
              class="flex items-start mb-2 font-medium text-gray"
            >
              {" "}
              Status{" "}
            </label>
            <select
              id="jobStatus"
              type="text"
              value={formData.jobStatus}
              onChange={handleChange}
              class="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
              required
            >
              <option value="">Select job status</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Declined">Declined</option>
              <option value="Rejected">Rejected</option>
              <option value="Accepted">Accepted</option>
            </select>
          </div>

          {/* Date Input */}
          <div class="w-full md:w-1/3 mb-4 md:mb-0">
            <label
              htmlFor="date"
              class="flex items-start mb-2 font-medium text-gray"
            >
              {" "}
              Date{" "}
            </label>
            <input
              type="date"
              id="date"
              value={formData.date}
              class="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          class="w-[50%] px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Add Job Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
