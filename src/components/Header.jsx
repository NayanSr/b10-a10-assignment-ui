// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";
// import DarkTheam from "./DarkTheam";

// const Header = () => {
// const {user,setLoading, handleSignout}= useContext(AuthContext);

// /* const handleGoogleLoginBtn=()=>{
// handleGoogleLogin()
// } */
// const handleLogout=()=>{
//   handleSignout()
//   .then(res=>{
//     setLoading(false)
//   })
// }
//   const links = (
//     <>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li className="md:mx-2">
//         <Link to="/allVisas">All Visas</Link>
//       </li>
//       <li>
//         <Link to="/addVisa">Add Visa</Link>
//       </li>
//       <li className="md:mx-2">
//         <Link to={`/myAdded/${user?.email}`}>My Added Visas</Link>
//       </li>
//       <li>
//         <Link to={`/myApplications/${user?.email}`}>My Visa Applications</Link>
//       </li>
//     </>
//   );

//   return (
// <div className=" w-full bg-primary sticky top-0 z-50">

//     <div className="navbar  text-white md:font-semibold max-w-[1400px] mx-auto ">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow "
//           >
//             {links}
//           </ul>
//         </div>
//         <Link
//           to="/"
//           className="btn text-3xl btn-ghost text-orange-500  font-bold italic"
//         >
//           E. Visa
//         </Link>
//       </div>

//       <div className="navbar-center hidden lg:flex -ml-40">
//         <ul className="menu menu-horizontal px-1  text-base">
//           {links}
//         </ul>
//       </div>




//       <div className="navbar-end mr-4 text-xl text-yellow-600 ">
//         {user ? (
//         <div className="flex items-center ">
            
//             {/* <p>{user?.displayName}</p> */}
//             <button onClick={handleLogout} className="btn btn-sm bg-orange-500 text-xl text-white "> <img className="w-4 h-4 rounded-full mr-1" src={user?.photoURL} alt={user?.displayName} /> Logout</button>
//         </div>
        
//         ) : (
        
//            <Link className="text-xl font-semibold text-teal-300 px-2 py-[1.5px] rounded-lg bg-orange-500" to="/login">
//             Login
//           </Link>
        
//         )}

//         <Link className="text-xl ml-4  font-semibold text-teal-300 px-2 py-[1.5px] rounded-lg bg-orange-500" to="/register">
//           Register
//         </Link>
//         <Link className="text-xl ml-4  font-semibold text-teal-300 px-2 py-[1.5px] rounded-lg bg-orange-500" to="/dashboard">
//           Dashboard
//         </Link>
//        <DarkTheam/>
         
        
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Header;





//!
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import DarkTheam from "./DarkTheam";

const Header = () => {
  const { user, setLoading, handleSignout } = useContext(AuthContext);

  const handleLogout = () => {
    handleSignout().then(res => {
      setLoading(false);
    });
  };

  const links = (
    <>
      <li>
        <Link to="/" className="hover:bg-orange-500 hover:text-white rounded">Home</Link>
      </li>
      <li>
        <Link to="/allVisas" className="hover:bg-orange-500 hover:text-white rounded">All Visas</Link>
      </li>
      <li>
        <Link to="/addVisa" className="hover:bg-orange-500 hover:text-white rounded">Add Visa</Link>
      </li>
      {user && (
        <>
          <li>
            <Link to={`/myAdded/${user?.email}`} className="hover:bg-orange-500 hover:text-white rounded">My Added Visas</Link>
          </li>
          <li>
            <Link to={`/myApplications/${user?.email}`} className="hover:bg-orange-500 hover:text-white rounded">My Visa Applications</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="w-full bg-primary sticky top-0 z-50">
      <div className="navbar text-white md:font-semibold max-w-[1400px] mx-auto px-4">
        {/* Mobile menu button and logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <div className=" -mr-44">
            <Link
            to="/"
            className="btn text-2xl md:text-3xl btn-ghost text-orange-500 font-bold italic p-2 "
          >
            E. Visa
          </Link>
          </div>
        </div>

        {/* Desktop navigation links - centered */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1 text-base">
            {links}
          </ul>
        </div>

        {/* Right side elements */}
        <div className="navbar-end gap-2">
          {user ? (
            <div className="flex items-center gap-2">
              <button 
                onClick={handleLogout} 
                className="btn btn-sm bg-orange-500 text-white flex items-center"
              >
                <img 
                  className="w-4 h-4 rounded-full mr-1" 
                  src={user?.photoURL} 
                  alt={user?.displayName} 
                />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          ) : (
            <Link 
              className="btn btn-sm bg-orange-500 text-teal-300" 
              to="/login"
            >
              Login
            </Link>
          )}

          {!user && (
            <Link 
              className="btn btn-sm bg-orange-500 text-teal-300" 
              to="/register"
            >
              Register
            </Link>
          )}

          <Link 
            className="btn btn-sm bg-orange-500 text-teal-300" 
            to="/dashboard"
          >
            Dashboard
          </Link>
          
          <DarkTheam />
        </div>
      </div>
    </div>
  );
};

export default Header; 