// import { Link } from "react-router-dom";

// const LatestVisa = ({ data }) => {
//   // console.log(data);
//   return (
//     <div className="mb-4 max-w-[1400px] dark:bg-gray-700 dark:text-white">
//       <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 my-4 ">
//         {data.map((dt, idx) => (
//           <div className="card card-compact bg-base-100 border-2 border-gray-100  shadow-xl dark:bg-gray-700 dark:text-white" key={idx}>
//             <figure>
//               <img
//                 className="w-full h-44 object-cover"
//                 src={dt.countryImage}
//                 alt={dt.countryName}
//               />
//             </figure>
//             <div className="mt-4 p-4">
//               <h2 className="card-title">{dt.countryName}</h2>
//               {/* <p>{countryImage}</p> */}
//               <p>Visa Type : {dt.visaType}</p>
//               <p>Visa Fee : {dt.fee}</p>
//               <div className="card-actions justify-end mt-4">
//                 <button className="btn bg-blue-600 text-lg text-white hover:text-black">
//                   <Link to={`/visaDetails/${dt._id}`}>view details</Link>
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//      <button className="btn bg-blue-600 mx-auto block h-12 text-white sm:btn-sm md:btn-md lg:btn-lg"> <Link to='/allVisas'>See All Visa</Link></button>
    
//     </div>
//   );
// };

// export default LatestVisa;




import { Link } from "react-router-dom";

const LatestVisa = ({ data }) => {
  return (
    <div className="mb-4 max-w-[1400px] mx-auto px-4 dark:bg-gray-700 dark:text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-4">
        {data.map((dt, idx) => (
          <div 
            className="card card-compact bg-base-100 border-2 border-gray-100 shadow-xl dark:bg-gray-700 dark:text-white hover:shadow-lg transition-shadow duration-300" 
            key={dt._id} // Better to use dt._id instead of idx if available
          >
            <figure>
              <img
                className="w-full h-48 object-cover"
                src={dt.countryImage}
                alt={dt.countryName}
              />
            </figure>
            <div className="mt-4 p-4">
              <h2 className="card-title text-xl">{dt.countryName}</h2>
              <p className="text-gray-600 dark:text-gray-300">Visa Type: {dt.visaType}</p>
              <p className="text-gray-600 dark:text-gray-300">Visa Fee: ${dt.fee}</p>
              <div className="card-actions justify-end mt-4">
                <Link 
                  to={`/visaDetails/${dt._id}`} 
                  className="btn bg-blue-600 hover:bg-blue-700 text-white text-lg"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link 
          to="/allVisas" 
          className="btn bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 inline-block"
        >
          See All Visas
        </Link>
      </div>
    </div>
  );
};

export default LatestVisa;