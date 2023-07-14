//Form Item - Mapping the submitted data to the form item
import React, { useState } from "react";

// Note: This form item needs to be a fixed size upon rendering

const FormItem = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleModal = () => {
    setIsEditing(!isEditing);
  };


  const handleSave = () => {
    // Perform save action here with the updated formData
    toggleModal();
  };

  
  return isEditing ? (
    // Modal
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded-lg shadow-[0_0px_10px_rgba(0,0,0,0.25)] max-w-md">
        <h3 className="mb-4 text-xl font-bold">Editing</h3>
        <div className="flex flex-col">
          {/* Add your input fields here */}
          <div className="flex justify-end mt-4">
            <button
              type="button"
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              className="px-4 py-2 ml-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-700 focus:outline-none focus:shadow-outline"
              onClick={toggleModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    // Form Item
    <div className="p-6 mt-8 mr-6 bg-white rounded-lg shadow-[0_0px_10px_rgba(0,0,0,0.25)] w-full max-w-md">
      <h3 className="mt-[-1rem] mb-2 text-xl font-bold">{data.company}</h3>
      <div class="grid grid-cols-2 items-start">
        <div className="flex flex-col items-start ml-[20%]">
          <p>
            <strong>Position: </strong>
            {data.position}
          </p>
          <p>
            <strong>Date: </strong>
            {data.date}
          </p>
          <p>
            <strong>Status: </strong>
            {data.status}
          </p>
        </div>
        <div className="flex flex-col items-end ml-[20%]">
          <p className="mr-auto">
            <strong>City: </strong>
            {data.city}
          </p>
          <p className="mr-auto">
            <strong>Type: </strong>
            {data.type}
          </p>
        </div>
      </div>

      {/* Edit Button */}
      <button
        type="button"
        className="px-4 py-2 ml-auto font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        onClick={toggleModal}
      >
        Edit
      </button>
    </div>
  );
};

export default FormItem;
