// This is the FormModal component where the user can edit the form item when they press on the 'Edit' button.

const FormModal = ({setIsEditing}) => {
   
  const handleSave = () => {
  // Perform save action here with the updated formData
  // console.log(formData);
    closeModal();
  };


  const closeModal = () => {
    setIsEditing(false);
  };
    
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
    <div className="p-6 bg-white rounded-lg shadow-[0_0px_10px_rgba(0,0,0,0.25)] max-w-md">
      <h3 className="mb-4 text-xl font-bold">Editing</h3>
      <div className="flex flex-col">

        {/* Modal Form */}
        <div className="flex flex-wrap justify-center">
          <div className="w-1/2 pr-4 mb-4 ">
            <label htmlFor="company" className="flex items-start mb-2 font-medium text-gray"> Company </label>
            <input
              type="text"
              id="company"
              className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
              required
            />
          </div>

          {/* Job Position Input */}
          <div className="w-1/2 mb-4">
            <label htmlFor="position" className="flex items-start mb-2 font-medium text-gray"> Position </label>
            <input
              type="position"
              id="position"
              className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
              required
            />
          </div>

          {/* City Input */}
          <div className="w-1/2 pr-4 mb-4">
            <label htmlFor="city" className="flex items-start mb-2 font-medium text-gray"> City </label>
            <input
              type="city"
              id="city"
              className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
              required
            />
          </div>

          <div className="w-1/2 mb-4">
                <label htmlFor="type" className="flex items-start mb-2 font-medium text-gray"> Job Type </label>
                <select
                id="type"
                className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
                required
                >
                <option value="">Select job type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Casual">Casual</option>
                </select>
            </div>

            {/* Job Status Drop-down List */}
            <div className="w-1/2 pr-4 mb-4">
              <label htmlFor="company" className="flex items-start mb-2 font-medium text-gray"> Status </label>
              <select
                id="status"
                className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
                required
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
              <label htmlFor="date" className="flex items-start mb-2 font-medium text-gray"> Date </label>
              <input
                type="date"
                id="date"
                className="w-full px-3 py-2 mb-2 leading-tight border rounded border-zinc-300 text-gray focus:outline-none focus:shadow-outline bg-lightergray"
                required
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
}
export default FormModal