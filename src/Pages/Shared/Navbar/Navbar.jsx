import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContexts } from "../../../Providers/AuthProviders";

import logo from '../../../assets/images/logoo.png'

const Navbar = () => {
  const [theme,setTheme] = useState('light')

  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme',localTheme)
  },[theme])
  const handleTheme = (e) => {
    if(e.target.checked){
      setTheme('dark')
    }
    else{
      setTheme('light')
    }

  }
  console.log(theme)
 
    const {user,logOut} = useContext(AuthContexts);

    const handleSignOut = () =>{
        logOut()
        .then()
        .catch()
    
      }

    const navLinks = <>
        <button className="text-base  p-3 rounded-lg text-orange-600 font-bold"><NavLink to='/'>Home</NavLink></button>
        <button className="text-base  p-3 rounded-lg  text-orange-600 font-bold"><NavLink to='/allAssignment'>Assignment</NavLink></button>
        <button className="text-base  p-3 rounded-lg  text-orange-600 font-bold">Contact</button>
        
        { user &&
        
          <>
          <button className="text-base   p-3 rounded-lg  text-orange-600 font-bold"><NavLink to='/create-assignment'>Create Assignment</NavLink></button>
          <button  className="text-base  p-3 font-bold rounded-lg text-orange-600 "><NavLink to='/pending-assignment'>Pending Assignment</NavLink></button>

          </>
        }
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
   <img className="w-full" src={logo} alt="" />
   
   </Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  
  <div className="navbar-end">
  <label className="cursor-pointer mr-5 grid place-items-center">
  <input onChange={handleTheme} type="checkbox" value="dark"  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
  {
        user ?
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img src={user?.PhotoURL || 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 space-y-4">
        <li>{user?.email}</li>
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