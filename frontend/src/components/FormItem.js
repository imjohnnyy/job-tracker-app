  //Form Item - Mapping the submitted data to the form item

  
  // Note: This form item needs to be a fixed size upon rendering

  const FormItem = ({ data }) => {
    return (
      <div className="p-6 mt-8 mr-6 bg-white rounded-lg shadow-[0_0px_10px_rgba(0,0,0,0.25)] w-full max-w-md">
        <h3 className="mt-[-1rem] mb-2 text-xl font-bold">{data.company}</h3>
        <div class="grid grid-cols-2 items-start">
          <div className="flex flex-col items-start ml-[20%]">
            <p><strong>Position: </strong>{data.position}</p>
            <p><strong>Date: </strong>{data.date}</p>
            <p><strong>Status: </strong>{data.status}</p>
          </div> 
          <div className="flex flex-col items-end ml-[20%]">
            <p className="mr-auto"><strong>City: </strong>{data.city}</p>
            <p className="mr-auto"><strong>Type: </strong>{data.type}</p>
          </div>
        </div>

  
        {/* Add Buttons Here */}
      </div>
    );
  };
  
  
  
  
  export default FormItem