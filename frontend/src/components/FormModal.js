// This is the FormModal component where the user can edit the form item when they press on the 'Edit' button.

import { EditApplication } from "../services/applications";
import { useDispatch } from "react-redux";
import { useState, useRef, useEffect } from "react";

const FormModal = ({ setIsEditing, formData }) => {
  const [useFormData, setUseFormData] = useState(formData);
  const dispatch = useDispatch();
  const formModalRef = useRef(null);

  const handleSave = () => {
    EditApplication(dispatch, {
      id: useFormData.id,
      company: useFormData.company,
      position: useFormData.position,
      date: useFormData.date,
      jobStatus: useFormData.jobStatus,
      jobType: useFormData.jobType,
      city: useFormData.city,
    });
    closeModal();
  };

  const closeModal = () => {
    setIsEditing(false);
  };

  const handleChangeText = (e) => {
    setUseFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.id]: e.target.value,
    }));
  };

  // Close Form modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        formModalRef.current &&         // Check if the formModalRef is not null (if the form modal element in the DOM exists)
        !formModalRef.current.contains(event.target) // Check if mouse click is outside the form modal
      ) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div
        className="p-6 bg-white rounded-lg shadow-[0_0px_10px_rgba(0,0,0,0.25)] max-w-md z-50"
        ref={formModalRef}
      >
        <h3 className="mb-4 text-xl font-bold">Editing</h3>
        <div className="flex flex-col">
          {/* Modal Form */}
          <div className="flex flex-wrap justify-center">
            <div className="w-1/2 pr-4 mb-4 ">
              <label
                htmlFor="company"
                className="flex items-start mb-2 font-medium text-gray"
              >
                {" "}
                Company{" "}
              </label>
              <input
                type="text"
                id="company"
                value={useFormData.company}
                onChange={handleChangeText}
                className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
              />
            </div>

            {/* Job Position Input */}
            <div className="w-1/2 mb-4">
              <label
                htmlFor="position"
                className="flex items-start mb-2 font-medium text-gray"
              >
                {" "}
                Position{" "}
              </label>
              <input
                type="position"
                id="position"
                value={useFormData.position}
                onChange={handleChangeText}
                className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
              />
            </div>

            {/* City Input */}
            <div className="w-1/2 pr-4 mb-4">
              <label
                htmlFor="city"
                className="flex items-start mb-2 font-medium text-gray"
              >
                {" "}
                City{" "}
              </label>
              <input
                type="city"
                id="city"
                value={useFormData.city}
                onChange={handleChangeText}
                className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
              />
            </div>

            <div className="w-1/2 mb-4">
              <label
                htmlFor="jobType"
                className="flex items-start mb-2 font-medium text-gray"
              >
                {" "}
                Job Type{" "}
              </label>
              <select
                id="jobType"
                type="jobType"
                className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
                value={useFormData.jobType}
                onChange={handleChangeText}
              >
                <option value="">Select job type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Casual">Casual</option>
              </select>
            </div>

            {/* Job Status Drop-down List */}
            <div className="w-1/2 pr-4 mb-4">
              <label
                htmlFor="jobStatus"
                className="flex items-start mb-2 font-medium text-gray"
              >
                {" "}
                Status{" "}
              </label>
              <select
                id="jobStatus"
                className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
                value={useFormData.jobStatus}
                onChange={handleChangeText}
              >
                <option value="">Select job status</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Declined">Declined</option>
                <option value="Rejected">Rejected</option>
                <option value="Accepted">Accepted</option>
              </select>
            </div>

            {/* Date Input */}
            <div className="w-1/2 mb-4">
              <label
                htmlFor="date"
                className="flex items-start mb-2 font-medium text-gray"
              >
                {" "}
                Date{" "}
              </label>
              <input
                type="date"
                id="date"
                className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
                value={useFormData.date}
                onChange={handleChangeText}
              />
            </div>
          </div>

          {/* Save and Cancel buttons */}
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
              className="px-4 py-2 ml-2 font-bold bg-gray-500 border-2 rounded border-lightgray text-gray hover:bg-gray-700 focus:outline-none focus:shadow-outline"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormModal;

