import React, { useEffect, useState } from 'react';
import { NewApplication } from '../services/applications';
import { useDispatch } from 'react-redux';
import FormItem from '../components/FormItem';

// A form for the user to submit their job application details
const ApplicationForm = () => {
  const [formData, setFormData] = useState({company: "", position: "", date: "", status: "", type: ""});
  const [isNewApplication, setIsNewApplication] = useState(true);
  const [submittedData, setSubmittedData] = useState([]);
  const dispatch = useDispatch();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setSubmittedData([...submittedData, formData]);
    // Reset the form fields
    setFormData({company: "", position: "", date: "", status: "", type: ""});

    if(isNewApplication) {
      NewApplication(dispatch, {company: formData.company, position: formData.position, date: formData.date, status: formData.status, type: formData.type});
    } else {

    }
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };


  return (
    <div className="flex items-center justify-center bg-lightergray" onSubmit={handleSubmit}>
      {/* Form */}
      <form className="w-full max-w-2xl px-6 py-8 rounded-lg shadow-[0_0px_10px_rgba(0,0,0,0.25)] bg-white">

        {/* Form Labels and Text Inputs*/}
        <div className="flex">
          <div className="w-1/2 pr-4 mb-4 ">
            <label htmlFor="company" className="flex items-start mb-2 font-medium text-gray"> Company </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
          </div>

          <div className="w-1/2 mb-4">
            <label htmlFor="position" className="flex items-start mb-2 font-medium text-gray"> Position </label>
            <input
              type="position"
              id="position"
              value={formData.position}
              className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Job Type Drop-down List */}
        <div className="flex">
            <div className="w-1/2 pr-4 mb-4">
                <label htmlFor="type" className="flex items-start mb-2 font-medium text-gray"> Job Type </label>
                <select
                id="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline"
                >
                <option value="">Select your job type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Casual">Casual</option>
                </select>
            </div>

            {/* Job Status Drop-down List */}
            <div className="w-1/2 mb-4">
            <label htmlFor="company" className="flex items-start mb-2 font-medium text-gray"> Status </label>
            <select
                id="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline"
            >
                <option value="">Select your job status</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Declined">Declined</option>
                <option value="Rejected">Rejected</option>
                <option value="Accepted">Accepted</option>
            </select>
            </div>
        </div>

        {/* Date Input */}
        <div className="mb-4">
          <label htmlFor="date" className="flex items-start mb-2 font-medium text-gray"> Date </label>
          <input
            type="date"
            id="date"
            value={formData.date}
            className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>

        <button
            type="submit"
            className="w-[50%] px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
            Add Job Application
        </button>
    </form>

    {/* Rendering the Form Item(s) */}
    <div className="flex flex-wrap justify-center">
        {submittedData.map((data, index) => (
          <FormItem key={index} data={data} />
        ))}
      </div>
  </div>

  );
}

export default ApplicationForm