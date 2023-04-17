import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";
import ResetPassword from "./pages/ResetPassword";






function Navbar(){
    const [click, setClick]=useState(false);
    const [dropdown, setDropdown]= useState(false);

    const handleClick= ()=> setClick(!click);
    const closeMobileMenu = () =>setClick(false);

    const onMouseEnter =()=>{
        if(window.innerWidth<960){
            setDropdown(false);
        }else {
            setDropdown(true);
        }
    };

    const onMouseLeave =()=>{
        if(window.innerWidth<960){
            setDropdown(false);
        }else {
            setDropdown(false);
        }
    };
    return(
        <>
        
        <nav className="navbar">
            <Link to ='/' className="navbar-logo" onClick={closeMobileMenu}>
             Kuda.
                
         </Link>
         
         <ul className={click ? 'nav-menu active' : 'nav-menu'}>

         
            <li className="nav-item" >
                <Link to ='personal' className="nav-links" onClick=
                {closeMobileMenu}>
                    Personal <i className='fas fa-caret-down' />
                </Link>
                
            </li>
            <li className="nav-item">
                <Link to ='bussines' className="nav-links" onClick=
                {closeMobileMenu}>
                    Bussines <i className='fas fa-caret-down' />
                </Link>
            </li>
            <li className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
                <Link to ='company' className="nav-links" onClick=
                {closeMobileMenu}>
                    Company <i className='fas fa-caret-down' />
                </Link>
                {dropdown && <Dropdown/>}
            </li>
            <li className="nav-item">
                <Link to ='developer' className="nav-links" onClick=
                {closeMobileMenu}>
                    Developer <i className='fas fa-caret-down' />
                </Link>
            </li>
            <li className="nav-item">
                <Link to ='help' className="nav-links" onClick=
                {closeMobileMenu}>
                    Help <i className='fas fa-caret-down' />
                </Link>
            </li>
            <li className="nav-item">
                <Link to ='sign-In' className="nav-links" onClick=
                {closeMobileMenu}>
                    Sign In
                </Link>
            </li>

            <li className="nav-item">
                <Link to ='join kuda' className="nav-links" onClick=
                {closeMobileMenu}>
                    <button className="btn">Join Kuda</button>
                </Link>
            </li>
            
         </ul>
         
        
        </nav>
        </>
    );
}

export default Navbar;