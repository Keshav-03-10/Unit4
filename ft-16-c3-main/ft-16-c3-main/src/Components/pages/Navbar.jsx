import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";



export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <nav style={{border:"1 px solid black", height:"200px",width:"100%", backgroundColor:"green"}}>
        {/* keep all the NavLinks here */}
        <div style={{display:"flex"}}></div>
        <NavLink to= "/home" > Home </NavLink>
        <NavLink to= "/about" > About </NavLink>
      </nav>
    </>
  );
};
