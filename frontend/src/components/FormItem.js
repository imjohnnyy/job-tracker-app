import React, { useState } from "react";
import FormModal from "../components/FormModal";
import { DeleteApplication } from "../services/applications";
import { useDispatch } from 'react-redux';

// Note: This form item needs to be a fixed size upon rendering

const FormItem = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    DeleteApplication(dispatch, data);
  };

  // Converts DateTime String to YYYY-MM-DD format
  const formatDate = (dateTimeString) => {
    const dateObject = new Date(dateTimeString);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const day = String(dateObject.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return isEditing ? (
    // Modal
    // If isEditing state is true then Modal is displayed, otherwise Form Item is displayed
      <FormModal setIsEditing={setIsEditing} formData={data} />
  ) : (
    // Form Item
    // If isEditing state is false then Form Item is displayed
    <div className="p-6 mt-8 mx-auto bg-white rounded-lg shadow-[0_0px_10px_rgba(0,0,0,0.25)] w-full max-w-xl">
      {/* Form Item Header */}
      <h3 className="mt-[-1rem] mb-2 text-xl font-bold">{data.company}</h3>

      <div className="grid items-start grid-cols-2">
        <div className="flex flex-col items-start">
          <p className="whitespace-nowrap">
            <strong>Position: </strong>
            {data.position}
          </p>
          <p className="whitespace-nowrap">
            <strong>City: </strong>
            {data.city}
          </p>
          <p>
            <strong>Status: </strong>
            {data.jobStatus}
          </p>
        </div>
        <div className="flex flex-col items-end ml-[42%] max-md:ml-6">
          <p className="mr-auto">
            <strong>Date: </strong>
            {formatDate(data.date)}
          </p>
          <p className="mr-auto">
            <strong>Type: </strong>
            {data.jobType}
          </p>
        </div>
      </div>

      {/* Edit Button */}
      <button
        type="button"
        className="px-4 py-2 mt-1 ml-auto mr-6 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        onClick={toggleModal}
      >
        Edit
      </button>

      {/* Delete Button */}
      <button
        type="button"
        className="px-4 py-2 ml-auto font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default FormItem;
