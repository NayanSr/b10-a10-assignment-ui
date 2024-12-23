

const Banner = () => {

/*   const {handleGoogleLogin} = useContext(AuthContext);
  const hhhh=()=>{
    handleGoogleLogin()
    .then(res=>{
      console.log(res);
    })
  } */
    return (
        <div className=" bg-green-400 text-white">


 
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          Your Gateway to Hassle-Free Travel!
        </h1>
        <p className="mt-4 text-lg sm:text-xl">
          Check Visa Requirements, Apply Online, and Track Your Application — All in One Place.
        </p>

    
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-transparent border border-white text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-white hover:text-blue-600 transition">
            Add Visa
          </button>
          <button className="bg-transparent border border-white text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-white hover:text-blue-600 transition">
            Check Requirements
          </button>
        </div>
<button >GoogleLogin</button>
       
      </div>
    </div>
    );
};

export default Banner;