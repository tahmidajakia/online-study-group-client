import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContexts } from "../../../Providers/AuthProviders";

import logo from '../../../assets/images/log.png'

const Navbar = () => {
 
    const {user,logOut} = useContext(AuthContexts);

    const handleSignOut = () =>{
        logOut()
        .then()
        .catch()
    
      }

    const navLinks = <>
        <button className="text-base mr-3 p-3 rounded-lg text-orange-600 font-bold"><NavLink to='/'>Home</NavLink></button>
        <button className="text-base mr-3 p-3 rounded-lg  text-orange-600 font-bold"><NavLink to='/allAssignment'>Assignment</NavLink></button>
        <button className="text-base mr-3  p-3 rounded-lg  text-orange-600 font-bold"><NavLink to='/create-assignment'>Create Assignment</NavLink></button>
        <button  className="text-base mr-3 p-3 font-bold rounded-lg text-orange-600 "><NavLink to='/pending-assignment'>Pending Assignment</NavLink></button>
    </>


    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    <div className="flex">
    <Link to='/' >
   <img className="w-1/3" src={logo} alt="" />
   
   </Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
  {
        user ?
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <Link to='/my-submit-assignment'>
        <li className="bg-orange-600 text-white rounded-xl"><a>My Assignments</a></li>
        </Link>
        <li><a onClick={handleSignOut} >Logout</a></li>
      </ul>
    </div>
        :
        <Link to='/login' >
     <button className="border mr-3 p-3 rounded-lg bg-orange-600 text-white">Login</button>
     <Link to='/register'>
    <button className="border ml-3 p-3 rounded-lg border-orange-600 text-orange-600">Register</button>
    </Link>
    
    </Link>
      }
  </div>
  
</div>
        </div>
    );
};

export default Navbar;