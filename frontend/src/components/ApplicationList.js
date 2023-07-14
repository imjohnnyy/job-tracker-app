import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetApplications } from '../services/applications';
import FormItem from '../components/FormItem';

const ApplicationList = () => {

  // Dispatches (sends) actions to the Redux store
  const dispatch = useDispatch();

  // Retrieves data from Redux store, allowing us to utilize it for rendering purposes
  const applications = useSelector(state => state.applicationsReducer.applications);

  useEffect(() => {
      GetApplications(dispatch);
  }, []);


  // Renders the list of applications
  return (
    <div className="flex flex-wrap justify-center">
      {applications.map((e) => (
        <div className="w-1/3 p-2" key={e.id}>
          <div className="flex justify-center">
            <FormItem data={e} />
          </div>
        </div>
      ))}
    </div>
  );
}




export default ApplicationList;