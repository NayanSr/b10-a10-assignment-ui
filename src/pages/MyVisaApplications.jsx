import { useLoaderData } from "react-router-dom";

const MyVisaApplications = () => {
  const data = useLoaderData();
  // console.log(data);
const handleCancel=id=>{
    // console.log(id);
    fetch(`https://b10a10-server-eight.vercel.app/${id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
        if(data?.deletedCount){alert('Visa Deleted')}
    })
}
  return (
    <div className="px-4">
      <h2>Total Applied: {data?.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 my-4">
        {data.map((dt) => (
          <div key={dt._id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src={dt.countryImage}
                alt={dt.countryName}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{dt.countryName}</h2>
              
              <p>{dt.visaType}</p>
              <p>Processing Time: {dt.processingTime}</p>
              <p>Validity: {dt.validity}</p>
              <p>Fee: {dt.fee}</p>
              <div className="card-actions justify-end">
                <button onClick={()=>handleCancel(dt._id)} className="btn btn-primary">Cancel</button>
              </div>
            </div>
          </div>
        ))}
      </div>
  
     
    </div>
  );
};

export default MyVisaApplications;
