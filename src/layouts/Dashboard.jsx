import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex max-w-[1400px] mx-auto">
      <div className="w-72 bg-teal-500 h-full mr-4">
        <ul className="menu">
          <li className='text-white text-lg'>
            <NavLink to="dashboard/link1">My Orders</NavLink>
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
