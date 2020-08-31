import React from "react";

const meetingDetail = (props) => {
  return (
    <div className="basic-form">
      <h3>Set meeting Time</h3>
      <form>
        <h4>Available Days</h4>
        <br />
        <label>From</label>
        <br />
        <select>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thrusday</option>
          <option>Friday</option>
          <option>Saturday</option>
          <option>Sunday</option>
        </select>
        <br />
        <label>Too</label>
        <br />
        <select>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thrusday</option>
          <option>Friday</option>
          <option>Saturday</option>
          <option>Sunday</option>
        </select>
        <br />
        <h4>Available Time</h4>
        <br />
        <label>From</label>
        <input type="time"></input>
        <label>Too</label>
        <input type="time"></input>
      </form>
      <div className="next-btn">
        <button onClick={props.click}>Next</button>
      </div>
    </div>
  );
};
export default meetingDetail;
