import React from "react";
import { Link } from "react-router-dom";

const signUp = () => {
  return (
    <div className="signin-form">
      <div className="basic-form">
        <h2>Create your Acount</h2>
        <form>
          <label>First Name</label>
          <input type="text"></input>
          <label>Last Name</label>
          <input type="text"></input>
          <label>Phone Number</label>
          <input type="number"></input>
          <label>Password</label>
          <input type="password"></input>
          <label>Confirm Password</label>
          <input type="password"></input>
        </form>
        <div className="signin-btn">
          <Link to="/sell/typePurpose">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default signUp;
