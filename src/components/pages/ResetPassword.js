import React from "react";

function ResetPassword (){
    return(
        <div>
            <h1>Forgot Password</h1>
            <label>Email Address</label>
            <input type='email' placeholder="example@gmail.com"/>

            Remember Password? Back to Sign-In
            <button>Reset</button>
        </div>
    )
}

export default ResetPassword;