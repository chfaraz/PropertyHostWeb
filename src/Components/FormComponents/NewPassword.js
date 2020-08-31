import React from "react";
import { Link } from "react-router-dom";

const forgetPassword = () => {
  return (
    <div className="signin-form">
      <div className="basic-form">
        <h2>Set New Password</h2>
        <form>
          <label>Password</label>
          <input type="password"></input>
          <label>Confirm Password</label>
          <input type="password"></input>
        </form>
        <div className="signin-btn">
          <Link to="/buy">
            <button>Done</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default forgetPassword;
