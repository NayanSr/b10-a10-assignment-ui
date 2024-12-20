
// eslint-disable-next-line react/prop-types
const VisaCard = ({visa}) => {
    // eslint-disable-next-line react/prop-types
    const {fee,visaType,countryImage,countryName}= visa
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
  <figure>
    <img
      className="w-full h-44 object-cover"
      src={countryImage}
      alt={countryName} />
  </figure>
  <div className="mt-4 ">
    <h2 className="card-title">{countryName}</h2>
    {/* <p>{countryImage}</p> */}
    <p>Visa Type : {visaType}</p>
    <p>Visa Fee : {fee}</p>
    <div className="card-actions justify-end mt-4">
      <button className="btn btn-primary">view details</button>
    </div>
  </div>
</div>
    );
};

export default VisaCard;