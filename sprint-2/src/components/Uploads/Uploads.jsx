import React from "react";
import "./Uploads.scss";
import Placeholder from "../../assets/Images/video-list-0.jpg";

function Uploads() {
  return (
    <div className="upload">
      <div className="divider"></div>
      <h1>Upload Video</h1>
      <form className="upload__form">
        <div className="divider upload__divider"></div>
        <div className="upload__container">
          <div className="upload__img-container">
            <h5>VIDEO THUMBNAIL</h5>
            <img
              src={Placeholder}
              alt="placeholder img"
              className="upload__img"
            />
          </div>
          <div className="upload__text-container">
            <div className="upload__form-input-container">
              <h5>TITLE YOUR VIDEO</h5>
              <input
                type="text"
                className="upload__form-input upload__form-input-text"
                placeholder="Add a title to your video"
              />
            </div>
            <div className="upload__form-input-container">
              <h5>ADD A VIDEO DESCRIPTION</h5>
              <textarea
                name=""
                className="upload__form-input upload__form-text-area"
                placeholder="Add a description to your video"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="divider upload__divider"></div>
        <div className="upload__btn-container">
          <button className="upload__cancel">
            <h3>CANCEL</h3>
          </button>
          <button className="upload__btn btn">
            <h3>PUBLISH</h3>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Uploads;
