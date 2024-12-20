/* eslint-disable react/prop-types */

import {  Link } from "react-router-dom";


const MyAddedVisaCard = ({ singleVisa, myAllVisa, setMyAllVisa }) => {


  const {
    _id,
    countryName,
    countryImage,
    visaType,
    processingTime,
    fee,
    validity,
    applicationMethod,
  } = singleVisa;



  const handleDelete = (id) => {
    console.log(id);
    console.log(myAllVisa);
    fetch(`http://localhost:5000/allVisa/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("deleted successfully");
          console.log(singleVisa);
          const rest = myAllVisa.filter((visa) => visa._id != id);
          setMyAllVisa(rest);
        }
      });
  };


/* 
const[item,setItem]= useState(null)
  const handleModalShow=async id=>{
    setItem(id)
    console.log('id from param',id);
    console.log('id from state',item);
 
   await document.getElementById("my_modal_5").showModal();
  } */

 
  return (
    <div className="card card-compact  shadow-xl">
      <figure>
        <img src={countryImage} alt={countryName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{countryName}</h2>
        <p className="text-base">Type of visa: {visaType}</p>
        <p className="text-base">
          Time required: {processingTime}
        </p>
        <p className="text-base">
          Visa fee: {fee}
        </p>
        <p className="text-base">
          Validity: {validity}
        </p>
        <p className="text-base">
          Application method: {applicationMethod}
        </p>
        <div className="card-actions justify-around">
          <button onClick={() => handleDelete(_id)} className="btn btn-error">
            Delete
          </button>
          <button className="btn btn-warning">
          <Link  to={`../updateVisa/${_id}`}>update</Link>
          </button>

         

       
        </div>
      </div>

      {/* //! Modal */}
      {/* <Modal id={_id} ></Modal> */}


    </div>
  );
};

export default MyAddedVisaCard;


// ! cannot see data in Modal component