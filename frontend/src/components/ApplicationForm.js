import React, { useEffect, useState } from 'react';

// A form for the user to submit their job application details
const ApplicationForm = () => {

  const [selectedStatusOption, setSelectedStatusOption] = useState('');
  const [selectedTypeOption, setSelectedTypeOption] = useState('');

  const handleStatusChange = (e) => {
    setSelectedStatusOption(e.target.value);
    console.log(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSelectedTypeOption(e.target.value);
    console.log(e.target.value);
  };
    
  return (
    <div className="flex items-center justify-center bg-lightergray">

      {/* Form */}
      <form className="w-full max-w-sm px-6 py-8 rounded-lg shadow-[0_0px_10px_rgba(0,0,0,0.25)] bg-white">

        {/* Form Labels and Text Inputs*/}
        <div className="pr-2 mb-4">
          <label htmlFor="company" className="flex items-start mb-2 font-medium text-gray"> Company </label>
          <input
            type="company"
            id="company"
            className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="position" className="flex items-start mb-2 font-medium text-gray"> Position </label>
          <input
            type="position"
            id="position"
            className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="company" className="flex items-start mb-2 font-medium text-gray"> Date </label>
          <input
            type="date"
            id="date"
            className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Job Type Drop-down List */}
        <div className="mb-4">
          <label htmlFor="type" className="flex items-start mb-2 font-medium text-gray"> Job Type </label>
          <select
            id="type"
            value={selectedTypeOption}
            onChange={handleTypeChange}
            className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline"
          >
            <option value="">Select your job type</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Casual">Casual</option>
          </select>
        </div>

        {/* Job Status Drop-down List */}
        <div className="mb-4">
          <label htmlFor="company" className="flex items-start mb-2 font-medium text-gray"> Status </label>
          <select
            id="status"
            value={selectedStatusOption}
            onChange={handleStatusChange}
            className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline"
          >
            <option value="">Select your job status</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Declined">Declined</option>
            <option value="Rejected">Rejected</option>
            <option value="Accepted">Accepted</option>
          </select>
        </div>
    </form>
  </div>
  );
}

export default ApplicationForm