import React, { Component } from "react";
import Basic from "../Components/FormComponents/Basic";
import TypePurpose from "../Components/FormComponents/TypePurpose";
import RoomDetail from "../Components/FormComponents/RoomDetail";
import MeetingDetail from "../Components/FormComponents/MeetingDetail";
import UploadPictures from "../Components/FormComponents/UploadPictures";

class Sell extends Component {
  state = {
    basic_form: true,
    room_detail_form: false,
    type_purpose_form: false,
    upload_pictures_form: false,
    meeting_detail_form: false,
    type: "Home",
  };
  showBasicForm = () => {
    this.setState({ basic_form: true });
    this.setState({ room_detail_form: false });
    this.setState({ type_purpose_form: false });
    this.setState({ upload_pictures_form: false });
    this.setState({ meeting_detail_form: false });
  };
  showRoomDetailForm = () => {
    this.setState({ basic_form: false });
    this.setState({ room_detail_form: true });
    this.setState({ type_purpose_form: false });
    this.setState({ upload_pictures_form: false });
    this.setState({ meeting_detail_form: false });
  };
  showTypeForm = () => {
    this.setState({ basic_form: false });
    this.setState({ room_detail_form: false });
    this.setState({ type_purpose_form: true });
    this.setState({ upload_pictures_form: false });
    this.setState({ meeting_detail_form: false });
  };
  showPictureForm = () => {
    this.setState({ basic_form: false });
    this.setState({ room_detail_form: false });
    this.setState({ type_purpose_form: false });
    this.setState({ upload_pictures_form: true });
    this.setState({ meeting_detail_form: false });
  };
  showMeetingForm = () => {
    this.setState({ basic_form: false });
    this.setState({ room_detail_form: false });
    this.setState({ type_purpose_form: false });
    this.setState({ upload_pictures_form: false });
    this.setState({ meeting_detail_form: true });
  };
  handleChange = (e) => {
    this.setState({ type: e.target.value });
  };
  render() {
    let clas = "active-form";
    let nav = (
      <nav>
        <ul>
          <li
            id={this.state.basic_form ? clas : null}
            onClick={this.showBasicForm}
          >
            1
          </li>
          <li
            id={this.state.type_purpose_form ? clas : null}
            onClick={this.showTypeForm}
          >
            2
          </li>
          {this.state.type === "Home" ? (
            <ul>
              <li
                id={this.state.room_detail_form ? clas : null}
                onClick={this.showRoomDetailForm}
              >
                3
              </li>
              <li
                id={this.state.meeting_detail_form ? clas : null}
                onClick={this.showMeetingForm}
              >
                4
              </li>
              <li
                id={this.state.upload_pictures_form ? clas : null}
                onClick={this.showPictureForm}
              >
                5
              </li>
            </ul>
          ) : (
            <ul>
              <li
                id={this.state.meeting_detail_form ? clas : null}
                onClick={this.showMeetingForm}
              >
                3
              </li>
              <li
                id={this.state.upload_pictures_form ? clas : null}
                onClick={this.showPictureForm}
              >
                4
              </li>
            </ul>
          )}
        </ul>
      </nav>
    );
    return (
      <div className="sell-page">
        <h2>Give detail about your Property</h2>
        {nav}
        {this.state.basic_form ? <Basic click={this.showTypeForm} /> : null}
        {this.state.type_purpose_form ? (
          <TypePurpose
            click={this.showRoomDetailForm}
            click1={this.showMeetingForm}
            changed={(e) => this.handleChange(e)}
            type={this.state.type}
          />
        ) : null}
        {this.state.room_detail_form ? (
          <RoomDetail click={this.showMeetingForm} />
        ) : null}
        {this.state.meeting_detail_form ? (
          <MeetingDetail click={this.showPictureForm} />
        ) : null}
        {this.state.upload_pictures_form ? <UploadPictures /> : null}
      </div>
    );
  }
}
export default Sell;
