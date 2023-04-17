import React from "react";
import { Button } from "../Button";
import ResetPassword from "./ResetPassword";
import { Link } from "react-router-dom";

function Kuda (){
    return(
        <>
        <div className="kuda-heading">
            The money APP <br/> for Africa.<br/>
            
          <Link to ='join kuda'><button className="btn">Join Kuda</button></Link> 
        
        
        </div>
        </>
    )
}

export default Kuda;