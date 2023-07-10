import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetApplications } from '../services/applications';


const ApplicationList = () => {
  // Dispatches (sends) actions to the Redux store
  const dispatch = useDispatch();

  // Retrieves data from Redux store, allowing us to utilize it for rendering purposes
  const applications = useSelector(state => state.applicationsReducer.applications);

  useEffect(() => {
      GetApplications(dispatch);
  }, []);


  // Renders the list of applications
  return applications.map((application) => (
    <div className="my-6">
      <p>{application.company}</p>
      <p>{application.date}</p>
      {/* <p>{application.date}</p>
      <p>{application.type}</p>
      <p>{application.status}</p> */}
    </div>)
   );
}

export default ApplicationList;