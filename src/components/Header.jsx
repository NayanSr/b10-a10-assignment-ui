import { Link } from "react-router-dom";

const Header = () => {
    const user= {name:'Nayan'}

    const links=<>
    <li><Link to='/'>Home</Link></li>
    <li className="mx-2"><Link to='/allVisas'>All Visas</Link></li>
    <li><Link to='/addVisa'>Add Visa</Link></li>
    <li className="mx-2"><Link to='/myAdded'>My Added Visas</Link></li>
    <li><Link to='/myApplications'>My Visa Applications</Link></li>
    </>

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              
              {links}
              
              
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost text-xl italic">E. Visa</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           
           
           
         {links}


          </ul>
        </div>
        <div className="navbar-end">
{
    user?.name? <Link className="text-lg font-semibold">Logout</Link> : <Link className="text-lg font-semibold"  to='/login'>Login</Link>
}

          <Link className="ml-4 text-lg font-semibold" to='/register'>Register</Link>
        </div>
      </div>
    );
};

export default Header;