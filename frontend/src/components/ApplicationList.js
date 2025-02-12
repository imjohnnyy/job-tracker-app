import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetApplications } from "../services/applications";
import FormItem from "../components/FormItem";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ApplicationsPagination from "./ApplicationsPagination";

const ApplicationList = () => {
  const dispatch = useDispatch();

  const { applications, total } = useSelector((state) => state.applicationsSlice); // Ensure total is fetched correctly

  const [filterStatus, setFilterStatus] = useState("all");
  const [toggleTimeArrow, setToggleTimeArrow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const itemsPerPage = 6; // Define the number of items per page

  const handleToggleArrow = () => {
    setToggleTimeArrow(!toggleTimeArrow);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    // Fetch applications based on current page and filter status
    GetApplications(dispatch, currentPage, itemsPerPage);
  }, [dispatch, currentPage, filterStatus]);

  // Filters applications based on the selected status
  const filteredApplications = Array.isArray(applications)
    ? filterStatus === "all"
      ? applications
      : applications.filter(
          (app) =>
            app.jobStatus?.trim().toLowerCase() === filterStatus.toLowerCase()
        )
    : [];

  // Sort job applications based on the date
  const sortedApplications = [...filteredApplications].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (toggleTimeArrow) {
      return dateB - dateA; // Sort by most recent first
    } else {
      return dateA - dateB; // Sort by earliest first
    }
  });

  return (
    <div>
      {/* Filter and Sort */}
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
        <h1 className="ml-[68px] text-2xl font-semibold text-start max-md:text-center max-md:ml-0">
          {sortedApplications.length > 1
            ? `${sortedApplications.length} Jobs Found`
            : sortedApplications.length === 1
            ? `1 Job Found`
            : `No jobs to display`}
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        {Array.isArray(sortedApplications) && sortedApplications.length > 0
          ? sortedApplications.map((e) => (
              <div className="flex justify-center" key={e.id}>
                <FormItem data={e} />
              </div>
            ))
          : ""}
      </div>

      <div className="flex justify-center mt-5">
        <ApplicationsPagination
          currentPage={currentPage}
          total={total}   
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ApplicationList;
