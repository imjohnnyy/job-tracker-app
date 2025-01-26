import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetApplications } from '../services/applications';
import FormItem from '../components/FormItem';

const ApplicationList = () => {
  const dispatch = useDispatch();

  // Retrieves data from Redux store
  const applications = useSelector((state) => state.applicationsSlice.applications);

  // State to hold the selected filter
  const [filterStatus, setFilterStatus] = useState('all'); // 'all' means no filter

  useEffect(() => {
    const timer = setTimeout(() => {
        GetApplications(dispatch);
    }, 500); // 0.5 sec delay

    // Clean up the timeout when the component unmounts or when 'applications' changes
    return () => clearTimeout(timer);
}, [applications]);

  // Debugging
  console.log("Applications Data:", applications);
  console.log("Selected Filter Status:", filterStatus);

  // Filters applications based on the selected status
  const filteredApplications =
    filterStatus === 'all'
      ? applications
      : applications.filter((app) =>
          app.jobStatus?.trim().toLowerCase() === filterStatus.toLowerCase()
        );

  return (
    <div>
      {/* Dropdown Filter */}
      <div className="flex justify-center mb-4">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 mt-8 bg-white border rounded-lg shadow-md"
        >
          <option value="all">All</option>
          <option value="ongoing">Ongoing</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {/* Render Filtered Applications */}
      <div className="flex flex-wrap justify-center">
        {filteredApplications.length > 0 ? (
          filteredApplications.map((e) => (
            <div className="max-md:w-full max-md:mb-6 md:w-full" key={e.id}>
              <div className="flex justify-center">
                <FormItem data={e} />
              </div>
            </div>
          ))
        ) : (
          <p>No job applications found.</p>
        )}
      </div>
    </div>
  );
};

export default ApplicationList;
