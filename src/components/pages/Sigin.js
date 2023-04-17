import React from "react";
import { Link } from "react-router-dom";
import ResetPassword from "./ResetPassword";

function SignIn(){
    return(
    
        <div className="Layout">
      <h5> Pleasecheck that you are visiting the correct URL http:// app.kuda.com</h5>
        
        <div className='Sign-Layout'>
       <h2>Sign In</h2> <br/>
        <label className="lb">Email Address</label><br></br>
        <input placeholder='you@example.com'/>
        <br/>
        <label className="lb">Password</label><br/>
        <input placeholder="Password" type='password'/>
        <p>Forgot Password or User ID ? <Link to='reset password'>Rest Now</Link></p>
        <button className="sbtn">Sign In</button><br/>
        To upgrade to a live environment you'll need<br/>
        a kuda for bussiness account.
        </div>
        </div>
        
    )
}

export default SignIn;