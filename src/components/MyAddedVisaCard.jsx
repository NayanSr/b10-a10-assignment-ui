/* eslint-disable react/prop-types */

const MyAddedVisaCard = ({visa}) => {
    const {_id,countryName,countryImage,visaType,processingTime,fee,validity,applicationMethod}= visa;
    const handleDelete=id=>{
        console.log(id);
    }
    
    return (
        <div className="card card-compact  shadow-xl">
  <figure>
    <img
      src={countryImage}
      alt={countryName} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{countryName}</h2>
    <p className="text-base">Type of visa: {visaType}</p>
    <p className="text-base">Time required: {processingTime} {visaType}</p>
    <p className="text-base">Visa fee: {fee} {visaType}</p>
    <p className="text-base">Validity: {validity} {visaType}</p>
    <p className="text-base">Application method: {applicationMethod} {visaType}</p>
    <div className="card-actions justify-around">
      <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
      <button className="btn btn-primary">Update</button>
    </div>
  </div>
</div>
    );
};

export default MyAddedVisaCard;