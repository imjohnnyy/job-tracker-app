import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetApplications } from "../services/applications";
import FormItem from "../components/FormItem";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const ApplicationList = () => {
  const dispatch = useDispatch();

  const applications = useSelector(
    (state) => state.applicationsSlice.applications
  );

  const [filterStatus, setFilterStatus] = useState("all"); // 'all' means no filter
  const [toggleTimeArrow, setToggleTimeArrow] = useState(false);

  const handleToggleArrow = () => {
    setToggleTimeArrow(!toggleTimeArrow);
  };

  // Filters applications based on the selected status
  const filteredApplications =
    filterStatus === "all"
      ? applications
      : applications.filter(
          (app) =>
            app.jobStatus?.trim().toLowerCase() === filterStatus.toLowerCase()
        );

  // Sort job applications based on the date
  const sortedApplications = [...filteredApplications].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (toggleTimeArrow) {
      // Sort by most recent first (descending order)
      return dateB - dateA;
    } else {
      // Sort by earliest first (ascending order)
      return dateA - dateB;
    }
  });
  
  useEffect(() => {
    GetApplications(dispatch);
  }, [dispatch, sortedApplications]);


  return (
    <div>
      {/* Filter and Sort */}
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

        {/* Time sort toggle */}
        {toggleTimeArrow === false ? (
          <ArrowUpwardIcon
            onClick={handleToggleArrow}
            className="mt-10 ml-2"
            style={{ fontSize: "175%" }}
          />
        ) : (
          <ArrowDownwardIcon
            onClick={handleToggleArrow}
            className="mt-10 ml-2"
            style={{ fontSize: "175%" }}
          />
        )}
      </div>

      <div>
        <h1 className="ml-[68px] text-2xl font-semibold text-start">
          {sortedApplications.length > 1
            ? `${sortedApplications.length} Jobs Found`
            : sortedApplications.length === 1
            ? `1 Job Found`
            : `No jobs to display`}
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        {sortedApplications.length > 0
          ? sortedApplications.map((e) => (
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
