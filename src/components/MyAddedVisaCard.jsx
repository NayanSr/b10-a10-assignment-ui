/* eslint-disable react/prop-types */


const MyAddedVisaCard = ({singleVisa,myAllVisa,setMyAllVisa}) => {
    const {_id,countryName,countryImage,visaType,processingTime,fee,validity,applicationMethod}= singleVisa;
    const handleDelete=id=>{
        console.log(id);
        console.log(myAllVisa);
        fetch(`http://localhost:5000/allVisa/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                alert('deleted successfully');
                console.log(singleVisa);
                const rest = myAllVisa.filter(visa=> visa._id!=id);
                setMyAllVisa(rest);
               
            }
        }
        )
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