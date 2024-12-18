
// eslint-disable-next-line react/prop-types
const VisaCard = ({visa}) => {
    // eslint-disable-next-line react/prop-types
    const {fee,visaType,countryImage,countryName}= visa
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
  <figure>
    <img
      src={countryImage}
      alt={countryName} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{countryName}</h2>
    {/* <p>{countryImage}</p> */}
    <p>Visa Type : {visaType}</p>
    <p>Visa Fee : {fee}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">view details</button>
    </div>
  </div>
</div>
    );
};

export default VisaCard;