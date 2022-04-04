import React from "react";
import "./SignIn.css";
import logoBlack from "../../Assets/Images/logoBlack.png";

const SignIn = () => {
  return (
    <div>
      <div className="container">
        <div className="signIn">
          <div>
            <div className="logo my-4">
              <img src={logoBlack} />
            </div>
            <div className="signInBox p-4">
              <h2 className="diaplay-5 mb-3">Sign-in</h2>
              <form>
                <div className="inputBlock">
                  <p>Email</p>
                  <input type="email" />
                </div>
                <div className="inputBlock mt-3">
                  <p>Password</p>
                  <input type="password" />
                </div>
                <div className="signInBtn mt-4">
                  <button className="">Sign In</button>
                </div>
              </form>
              <div className="formDesc mt-2">
                <small>
                  By signing-in you agree to the AMAZON FAKE CLONE Conditions of
                  Use & Sale. Please see our Privacy Notice, our Cookies Notice
                  and our Interest-Based Ads Notice.
                </small>
              </div>
              <div className="createAccBtn mt-2">
                <button className="">Create Your Amazon Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
