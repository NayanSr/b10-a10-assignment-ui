import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Dashboard = () => {
  const {user}= useContext(AuthContext);
  console.log(user?.email);
  
  return (
    <div className="flex max-w-[1400px] mx-auto">
      <div className="w-72 bg-orange-500 h-screen mr-4">
        <ul className="menu">
          <li className='text-white text-lg'>
            <NavLink to="profile">My Profile</NavLink>
          </li>
          <li className='text-white text-lg'>
            <NavLink to="addVisa">Add Visa</NavLink>
          </li>
          <li className='text-white text-lg'>
            <NavLink to={`myAdded/${user?.email}`}>My Added Visa</NavLink>
          </li>
          <li className='text-white text-lg'>
            <NavLink to={`myApplications/${user?.email}`}>My Applied Visa</NavLink>
          </li>
          <div className= "border-2 border-t-orange-900"></div>
          <li className='text-white text-xl'>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </div>

      <div className="flex-1 min-h-screen">
        <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;
