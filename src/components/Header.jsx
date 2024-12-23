import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
const {user,setLoading, handleSignout}= useContext(AuthContext);

/* const handleGoogleLoginBtn=()=>{
handleGoogleLogin()
} */
const handleLogout=()=>{
  handleSignout()
  .then(res=>{
    setLoading(false)
  })
}
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className="md:mx-2">
        <Link to="/allVisas">All Visas</Link>
      </li>
      <li>
        <Link to="/addVisa">Add Visa</Link>
      </li>
      <li className="md:mx-2">
        <Link to={`/myAdded/${user?.email}`}>My Added Visas</Link>
      </li>
      <li>
        <Link to={`/myApplications/${user?.email}`}>My Visa Applications</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-slate-100">
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
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow "
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-orange-500 text-2xl font-bold italic"
        >
          E. Visa
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  text-base">
          {links}
        </ul>
      </div>
      <div className="navbar-end mr-4 text-xl text-yellow-600">
        {user ? (
        <div className="flex items-center">
            <img className="w-8 h-8 rounded-full mr-4" src={user?.photoURL} alt={user?.displayName} />
            {/* <p>{user?.displayName}</p> */}
            <button onClick={handleLogout} className="btn btn-success text-xl text-white">Logout</button>
        </div>
        
        ) : (
        
           <Link className="text-lg font-semibold" to="/login">
            Login
          </Link>
        
        )}

        <Link className="ml-4  font-semibold" to="/register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Header;
