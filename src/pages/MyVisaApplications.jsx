import { useLoaderData } from "react-router-dom";

const MyVisaApplications = () => {
  const data = useLoaderData();
  console.log(data);
const handleCancel=id=>{
    console.log(id);
    fetch(`http://localhost:5000/myApplied/${id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{console.log(data)
        if(data?.deletedCount){alert('Visa Deleted')}
    })
}
  return (
    <div>
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
      <h2>Data: {data.length}</h2>
      10. My visa applications: It will be a private/protected route. In this
      page the user will see all the visas that the logged in user applied
      for.Each card will contain this informationj. <br />
      Country. <br />
      k. Country image. <br />
      l. Visa_type. <br />
      m. Processing_time. <br />
      n. Fee. o. Validity. p. Application_method. <br />
      q. Applied_date. <br />
      r. Applicant&apos;s name.(Combine Firstname and Lastname through a space){" "}
      <br />
      s. Applicant’s email. <br />
      t. “Cancel” button. <br />● Clicking the “Cancel” button will remove the
      application both from the database and “My visa applications” page.
    </div>
  );
};

export default MyVisaApplications;
