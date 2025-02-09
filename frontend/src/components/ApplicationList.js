import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetApplications } from "../services/applications";
import FormItem from "../components/FormItem";

const ApplicationList = () => {
  const dispatch = useDispatch();

  // Retrieves data from Redux store
  const applications = useSelector(
    (state) => state.applicationsSlice.applications
  );

  // State to hold the selected filter
  const [filterStatus, setFilterStatus] = useState("all"); // 'all' means no filter

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
    filterStatus === "all"
      ? applications
      : applications.filter(
          (app) =>
            app.jobStatus?.trim().toLowerCase() === filterStatus.toLowerCase()
        );

  return (
    <div>
      {/* Dropdown Filter */}
      <div className="flex justify-center mb-6">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="py-2 mt-8 text-center bg-white border rounded-lg shadow-md"
        >
          <option value="all">All</option>
          <option value="ongoing">Ongoing</option>
          <option value="declined">Declined</option>
          <option value="rejected">Rejected</option>
          <option value="accepted">Accepted</option>
        </select>
      </div>
      <div>
        <h1 className="ml-[68px] text-2xl font-semibold text-start">
          {filteredApplications.length > 1
            ? `${filteredApplications.length} Jobs Found`
            : filteredApplications.length === 1
            ? `1 Job Found`
            : `No jobs to display`}
        </h1>
      </div>

      {/* Render Filtered Applications */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        {filteredApplications.length > 0
          ? filteredApplications.map((e) => (
              <div className="flex justify-center" key={e.id}>
                <FormItem data={e} />
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default ApplicationList;
