  //Form Item - Mapping the submitted data to the form item

const FormItem = ({ data }) => {
  return (
    <div className="p-4 mt-4 bg-gray-200 rounded">
    <h3 className="mb-2 text-lg font-bold">Submitted Form Item</h3>
    <p><strong>Company:</strong> {data.company}</p>
    <p><strong>Position:</strong> {data.position}</p>
    <p><strong>Date:</strong> {data.date}</p>
    <p><strong>Status:</strong> {data.status}</p>
    <p><strong>Type:</strong> {data.type}</p>
    </div>
  );
};

export default FormItem