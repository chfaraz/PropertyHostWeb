import React from "react";
import { Link } from "react-router-dom";

const forgetPassword = () => {
  return (
    <div className="signin-form">
      <div className="basic-form">
        <h2>Forget your Password</h2>
        <form>
          <label>Phone Number</label>
          <input type="number"></input>
        </form>
        <div className="signin-btn">
          <Link to="/login/enterCode">
            <button>Get Code</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default forgetPassword;
