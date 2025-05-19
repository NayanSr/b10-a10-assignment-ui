import { useLoaderData } from "react-router-dom";
import MyAddedVisaCard from "../components/MyAddedVisaCard";
import { useState } from "react";

const MyAddedVisa = () => {
  const myVisa = useLoaderData();
  const [myAllVisa, setMyAllVisa]= useState(myVisa)
  // console.log(myVisa);
  return (
    <div className="px-4">
      <h2 className="text-4xl text-center">My added Visa : {myAllVisa?.length}</h2>{" "}
      <br />


      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {myAllVisa.map((singleVisa) => (
          <MyAddedVisaCard key={singleVisa._id} singleVisa={singleVisa} myAllVisa={myAllVisa} setMyAllVisa={setMyAllVisa} />
        ))}
      </div>

    </div>
  );
};

export default MyAddedVisa;
