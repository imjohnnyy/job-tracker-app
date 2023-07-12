  //Form Item - Mapping the submitted data to the form item

  
  // Note: This form item needs to be a fixed size upon rendering

const FormItem = ({ data }) => {
  return (
    <div className="p-8 mt-8 mr-6 bg-white rounded-lg shadow-[0_0px_10px_rgba(0,0,0,0.25)] w-[30%]">
    <h3 className="mt-[-1rem] mb-2 text-xl font-bold">{data.company}</h3>
    <div className="flex flex-col items-start justify-start">
        <p className="mr-3"><strong>Position:</strong> {data.position}</p>
        <p className="mr-3"><strong>Date:</strong> {data.date}</p>
        <p className="mr-3"><strong>Status:</strong> {data.status}</p>
        <p className="mr-3"><strong>Type:</strong> {data.type}</p>
        <p className="mr-3"><strong>City:</strong> {data.city}</p>
    </div>

    {/* Add Buttons Here */}
    </div>
  );
};

export default FormItem