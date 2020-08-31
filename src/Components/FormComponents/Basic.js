import React from "react";

const basic = (props) => {
  return (
    <div className="basic-form">
      <form>
        <label>Title</label>
        <input type="text"></input>
        <label>Price in Rs:</label>
        <input type="number"></input>
        <label>Size</label>
        <div>
          <input type="number" />
          <select id="size-type">
            <option>Marla</option>
            <option>Canal</option>
            <option>Acer</option>
          </select>
        </div>
        <label>City</label>
        <input type="text"></input>
        <label>Address</label>
        <input type="text"></input>
        <label>Description</label>
        <textarea placeholder="write some thing about your property, that makes it special."></textarea>
      </form>
      <div className="next-btn">
        <button onClick={props.click}>Next</button>
      </div>
    </div>
  );
};
export default basic;
