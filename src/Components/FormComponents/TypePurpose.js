import React from "react";

const typePurpose = (props) => {
  return (
    <div className="basic-form">
      <form>
        <label>Purpose</label>
        <select>
          <option>For Sale</option>
          <option>For Rent</option>
        </select>
        <label>Property Type</label>
        <select value={props.type} onChange={props.changed}>
          <option>Home</option>
          <option>Plot</option>
          <option>Commercial</option>
        </select>
        <label>Property Detail</label>
        {props.type === "Home" ? (
          <select>
            <option>House</option>
            <option>Flat</option>
          </select>
        ) : null}
        {props.type === "Plot" ? (
          <select>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Agricultral</option>
          </select>
        ) : null}
        {props.type === "Commercial" ? (
          <select>
            <option>Office</option>
            <option>Shop</option>
            <option>Ware House</option>
          </select>
        ) : null}
        {props.type !== "Plot" ? (
          <article>
            <label>Build year</label>
            <input type="number" min="1900" max="2099" step="1" />
          </article>
        ) : null}
      </form>
      <div className="next-btn">
        {props.type === "Plot" ? (
          <button onClick={props.click1}>Next</button>
        ) : null}
        {props.type !== "Plot" ? (
          <button onClick={props.click}>Next</button>
        ) : null}
      </div>
    </div>
  );
};
export default typePurpose;
