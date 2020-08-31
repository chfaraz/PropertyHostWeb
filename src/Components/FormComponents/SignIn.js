import React from "react";
import { Link } from "react-router-dom";

const signIn = () => {
  return (
    <div className="signin-form">
      <div className="basic-form">
        <h2>Sign In to your Acount</h2>
        <form>
          <label>Phone Number</label>
          <input type="number"></input>
          <label>Password</label>
          <input type="password"></input>
          <Link to="/login/forgetPassword">
            <p>Forget Password</p>
          </Link>
        </form>
        <div className="signin-btn">
          <Link to="/sell/typePurpose">
            <button>Sign In</button>
          </Link>
        </div>
        <h3 id="no-acount">Dont Have an account</h3>
        <div className="signup-btn">
          <Link to="/login/signUp">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default signIn;
