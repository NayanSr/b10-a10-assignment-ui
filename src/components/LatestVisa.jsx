import { Link } from "react-router-dom";

const LatestVisa = ({ data }) => {
  console.log(data);
  return (
    <div className="mb-4">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
        {data.map((dt, idx) => (
          <div className="card card-compact bg-base-100  shadow-xl" key={idx}>
            <figure>
              <img
                className="w-full h-44 object-cover"
                src={dt.countryImage}
                alt={dt.countryName}
              />
            </figure>
            <div className="mt-4 p-4">
              <h2 className="card-title">{dt.countryName}</h2>
              {/* <p>{countryImage}</p> */}
              <p>Visa Type : {dt.visaType}</p>
              <p>Visa Fee : {dt.fee}</p>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary">
                  <Link to={`/visaDetails/${dt._id}`}>view details</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

     <button className="btn bg-teal-700 mx-auto block h-12 text-white sm:btn-sm md:btn-md lg:btn-lg"> <Link to='/allVisas'>See All Visa</Link></button>
    
    </div>
  );
};

export default LatestVisa;
