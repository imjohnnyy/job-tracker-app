import React, { useEffect, useState } from 'react';
import { NewApplication } from '../services/applications';
import { useDispatch } from 'react-redux';
import FormItem from '../components/FormItem';

// A form for the user to submit their job application details
const ApplicationForm = ({application, setIsEditing}) => {
  const [formData, setFormData] = useState({company: "", position: "", date: "", status: "", type: "", city: ""});
  const [isNewApplication, setIsNewApplication] = useState(true);
  const [submittedData, setSubmittedData] = useState([]);
  const dispatch = useDispatch();


  // Every time the application prop changes, the form is updated
  useEffect(() => {
    if(application !== undefined) {
      setIsNewApplication(false);
      setFormData({company: application.company, position: application.position,
             date: application.date, status: application.status, type: application.type, city: application.city});
    } else {
      setIsNewApplication(true);
    }
  }, [application]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setSubmittedData([...submittedData, formData]);

    // Reset the form fields
    setFormData({company: "", position: "", date: "", status: "", type: "", city: ""});

    if(isNewApplication) {
      NewApplication(dispatch, {company: formData.company, position: formData.position, 
        date: formData.date, status: formData.status, type: formData.type, city: formData.city});
    } else {
      setIsEditing(false);
    }
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };


  return (
    <div className="flex flex-col items-center justify-center bg-lightergray" onSubmit={handleSubmit}>
      {/* Form */}
      <form className="w-full max-w-2xl px-6 py-8 rounded-lg shadow-[0_0px_10px_rgba(0,0,0,0.25)] bg-white">

        {/* Form Labels and Inputs*/}
        {/* Company Input */}
        <div className="flex">
          <div className="w-1/3 pr-4 mb-4 ">
            <label htmlFor="company" className="flex items-start mb-2 font-medium text-gray"> Company </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
              onChange={handleChange}
              required
            />
          </div>

          {/* Job Position Input */}
          <div className="w-1/3 pr-4 mb-4">
            <label htmlFor="position" className="flex items-start mb-2 font-medium text-gray"> Position </label>
            <input
              type="position"
              id="position"
              value={formData.position}
              className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
              onChange={handleChange}
              required
            />
          </div>

          {/* City Input */}
          <div className="w-1/3 mb-4">
            <label htmlFor="city" className="flex items-start mb-2 font-medium text-gray"> City </label>
            <input
              type="city"
              id="city"
              value={formData.city}
              className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
              onChange={handleChange}
              required
            />
          </div>
          
        </div>

        {/* Job Type Drop-down List */}
        <div className="flex">
            <div className="w-1/3 pr-4 mb-4">
                <label htmlFor="type" className="flex items-start mb-2 font-medium text-gray"> Job Type </label>
                <select
                id="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
                required
                >
                <option value="">Select job type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Casual">Casual</option>
                </select>
            </div>

            {/* Job Status Drop-down List */}
            <div className="w-1/3 pr-4 mb-4">
              <label htmlFor="company" className="flex items-start mb-2 font-medium text-gray"> Status </label>
              <select
                id="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
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
            <div className="w-1/3 mb-4">
              <label htmlFor="date" className="flex items-start mb-2 font-medium text-gray"> Date </label>
              <input
                type="date"
                id="date"
                value={formData.date}
                className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
                onChange={handleChange}
                required
              />
            </div>
        </div>

        {/* Submit Button */}
        <button
            type="submit"
            className="w-[50%] px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
            Add Job Application
        </button>

    </form>

  </div>

  );
}

export default ApplicationForm