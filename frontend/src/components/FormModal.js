// This is the FormModal component where the user can edit the form item.

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
            className="px-4 py-2 ml-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-700 focus:outline-none focus:shadow-outline"
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