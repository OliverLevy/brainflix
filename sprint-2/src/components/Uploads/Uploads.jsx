import React from "react";
import "./Uploads.scss";
import Placeholder from "../../assets/Images/video-list-0.jpg";

function Uploads() {
  return (
    <div>
      <div className="divider"></div>
      <h1>Upload Video</h1>
      <form>
        <div className="divider"></div>
        <div>
          <img src={Placeholder} alt="placeholder img" />
          <div>
            <div>
              <h5>TITLE YOUR VIDEO</h5>
              <input type="text" />
            </div>
            <div>
              <h5>ADD A VIDEO DESCRIPTION</h5>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          </div>
          <div className="divider"></div>
        </div>
    <button>CANCEL</button>
        <button>PUBLISH</button>
      </form>
    </div>
  );
}

export default Uploads;
