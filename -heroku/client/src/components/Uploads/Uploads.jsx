import React from "react";
import "./Uploads.scss";

function Uploads({ uploadHandler }) {
  return (
    <div className="upload">
      <div className="divider"></div>
      <h1 className="upload__header">Upload Video</h1>
      <form onSubmit={uploadHandler} className="upload__form">
        <div className="divider upload__divider upload__divider--top"></div>
        <div className="upload__container">
          <div className="upload__img-container">
            <h5>VIDEO THUMBNAIL</h5>
            <img
              name="img"
              src="https://images.unsplash.com/photo-1593455071238-92dd081a39b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="placeholder img"
              className="upload__img"
            />
          </div>
          <div className="upload__text-container">
            <div className="upload__form-input-container-top">
              <h5>TITLE YOUR VIDEO</h5>
              <input
                type="text"
                name="title"
                className="upload__form-input upload__form-input-text"
                placeholder="Add a title to your video"
              />
            </div>
            <div className="upload__form-input-container-bottom">
              <h5>ADD A VIDEO DESCRIPTION</h5>
              <textarea
                name="description"
                className="upload__form-input upload__form-text-area"
                placeholder="Add a description to your video"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="divider upload__divider upload__divider--bottom"></div>
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
