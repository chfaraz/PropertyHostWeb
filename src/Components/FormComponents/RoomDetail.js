import React from "react";

const roomsDetail = (props) => {
  return (
    <div className="basic-form">
      <form>
        <label>bed Rooms</label>
        <input type="number"></input>
        <label>Bath Rooms</label>
        <input type="number"></input>
        <label>Parking Space</label>
        <input type="number"></input>
        <label>Floors</label>
        <input type="number"></input>
        <label>Flooring</label>
        <input type="text" placeholder="e.g: Wooden, Marbel, Tyle"></input>
      </form>

      <div className="next-btn">
        <button onClick={props.click}>Next</button>
      </div>
    </div>
  );
};
export default roomsDetail;
