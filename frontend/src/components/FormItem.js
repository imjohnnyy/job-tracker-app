import React, { useState } from "react";
import FormModal from "../components/FormModal";
import { DeleteApplication } from "../services/applications";
import { useDispatch } from "react-redux";

const FormItem = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    DeleteApplication(dispatch, data);
  };

  // Converts DateTime String into 'DD Month, YYYY' format
  const formatDate = (dateTimeString) => {
    const dateObject = new Date(dateTimeString);
    const day = dateObject.getDate();
    const month = dateObject.toLocaleString("default", { month: "short" }); // Get short month name
    const year = dateObject.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  return isEditing ? (
    <FormModal setIsEditing={setIsEditing} formData={data} />
  ) : (
    <div className="p-2 mt-8 mx-auto bg-white rounded-2xl shadow-[0_0px_10px_rgba(0,0,0,0.25)] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-w-3xl hover:scale-100 hover:shadow-2xl transition-all duration-300 ease-in-out">
      <div className="w-full p-4 bg-blue-100 h-54 rounded-2xl border-light-blue-200">
        <h3 className="py-1 mb-2 text-sm font-semibold bg-white border border-white rounded-2xl sm:text-md md:text-lg">
          {formatDate(data.date)}
        </h3>

        <div className="grid items-start grid-cols-1">
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold sm:text-md">{data.company}</p>
            <div className="flex space-x-4">
              <p className="text-2xl font-normal text-left break-words whitespace-normal sm:text-3xl">
                {data.position}
              </p>
            </div>
            <p
              className={`mt-4 text-xs sm:text-sm md:text-md font-semibold text-white px-3 py-1 rounded-full 
              ${
                data.jobStatus === "Accepted"
                  ? "bg-green-600"
                  : data.jobStatus === "Ongoing"
                  ? "bg-blue-500"
                  : data.jobStatus === "Rejected"
                  ? "bg-red-600"
                  : data.jobStatus === "Declined"
                  ? "bg-yellow-600"
                  : ""
              }`}
            >
              {data.jobStatus}
            </p>

            <div className="flex flex-wrap mt-4 space-x-4 transition-all duration-300 ease-in-out md:flex-row">
              <p className="w-auto px-3 py-2 mb-2 text-xs font-semibold bg-blue-100 border border-gray-300 sm:text-sm text-gray rounded-2xl">
                {data.city}
              </p>

              <p className="w-auto px-3 py-2 mb-2 text-xs font-semibold bg-blue-100 border border-gray-300 sm:text-sm text-gray rounded-2xl">
                {data.jobType}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Edit and Delete buttons */}
      <div className="flex flex-col flex-wrap justify-center my-3 space-y-4 transition-all duration-300 ease-in-out sm:flex-row sm:space-y-0 sm:space-x-4 md:space-x-6">
        <button
          type="button"
          className="px-6 py-2 text-sm font-semibold text-white transition duration-300 ease-in-out transform bg-indigo-500 rounded-lg sm:text-base hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400 hover:scale-105 focus:outline-none"
          onClick={toggleModal}
          aria-label="Edit"
        >
          Edit
        </button>
        <button
          type="button"
          className="px-6 py-2 text-sm font-semibold text-white transition duration-300 ease-in-out transform bg-red-600 rounded-lg sm:text-base hover:bg-red-700 focus:ring-2 focus:ring-red-400 hover:scale-105 focus:outline-none"
          onClick={handleDelete}
          aria-label="Delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FormItem;
