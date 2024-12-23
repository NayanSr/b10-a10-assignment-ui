import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "react-modal";
import { AuthContext } from "../provider/AuthProvider";
// import ReactDOM from 'react-dom';

const VisaDetails = () => {
  const data = useLoaderData();
  const user =useContext(AuthContext);
  const email = user.user.email;

  const {
    _id,
    countryName,
    countryImage,
    visaType,
    processingTime,
    requiredDocs,
    description,
    ageRestriction,
    fee,
    validity,
    applicationMethod,
  } = data;
  // console.log(data);

  //!modal requirements st
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  /*  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  } */

  function closeModal() {
    setIsOpen(false);
  }

  //!modal requirements ed

  const handleVisaApply = (id) => {
    // console.log(id);
    openModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const lName = form.lName.value;
    const fName = form.fName.value;
    const appliedUserEmail = form.email.value;
    const fee = form.fee.value;
    const appliedData={fName,lName,appliedUserEmail,fee, ...data}
    // console.log(appliedData);
    fetch('https://b10a10-server-eight.vercel.app/myApplied',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(appliedData)
    })
    .then(res=>res.json())
    .then(dt=>{
      // console.log(dt)
      })

    closeModal();
  };

  // const handleModalSubmit=()=>{
  //   const name= document.getElementById('fName').value;
  //   console.log(name);
  //   closeModal()
  // }

  return (
    <div className="mt-4">
      <div className="card card-compact  shadow-xl">
        <figure>
          <img src={countryImage} alt={countryName} />
        </figure>
        <div className="card-body ml-32">
          <h2 className="card-title">{countryName}</h2>
          <p className="text-base">Type of visa: {visaType}</p>
          <p className="text-base">Time required: {processingTime}</p>
          <p className="text-base">Required Documents :</p>
          <ul className="list-disc text-base  pl-4 ml-6 ">
            {requiredDocs.map((doc, idx) => (
              <li className=" " key={idx}>
                {doc}
              </li>
            ))}
          </ul>
          <p className="text-base">Age restriction: ${ageRestriction} year</p>
          <p className="text-base">About this: ${description}</p>
          <p className="text-base">Visa fee: ${fee}</p>
          <p className="text-base">Validity: {validity} day</p>
          <p className="text-base">Application method: {applicationMethod}</p>
          <div className="card-actions justify-around">
            <button
              onClick={() => handleVisaApply(_id)}
              className="btn btn-error"
            >
              Apply for the visa
            </button>
          </div>
        </div>

        {/* //! Modal starts */}
        <div>
          {/* <button onClick={openModal}>Open Modal</button> */}
          <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
          >
            {/* <button onClick={closeModal}>close</button> */}
            {/* <div>I am a modal</div> */}
            <form onSubmit={handleSubmit}>
              {/* <input /> */}
              {/* <input type="text" name="name" id="" /> */}

              <label className="input input-bordered flex items-center gap-2">
                Email
                <input type="text" className="grow" name="email"  defaultValue={email} />
              </label>

              <label className="input input-bordered flex items-center gap-2 my-4">
                First Name
                <input type="text" className="grow" name="fName" placeholder="First Name" />
              </label>
              
             
              <label className="input input-bordered flex items-center gap-2">
                Last Name
                <input type="text" className="grow" name="lName" placeholder="Last Name" />
              </label>

              <label className="input input-bordered flex items-center gap-2 my-4">
                Visa Details
                <input type="text" className="grow" name="" placeholder={[countryName, " & ",  visaType]} />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                Visa Fee
                <input type="text" className="grow" name="fee" placeholder='Fee' defaultValue={fee}/>
              </label>

              <div className="w-3/4 mx-auto flex justify-center mt-4">
              <input className=" w-3/4 btn btn-success" type="submit" value="submit" />
              </div>

            </form>
          </Modal>
        </div>
        {/* //! Modal ends */}
      </div>
     
    </div>
  );
};
// React.render(<VisaDetails />, setAppElement);

export default VisaDetails;
