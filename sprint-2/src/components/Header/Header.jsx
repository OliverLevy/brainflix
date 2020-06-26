import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/Logo-brainflix.svg";
import UploadBtn from "../../assets/Icons/SVG/Icon-upload.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Brainflix logo" className="header__logo" />
      </Link>

      <div className="header__items">
        <div className="header__search-container">
          <input
            type="search"
            className="header__search-bar"
            placeholder="Search"
          />
          <div className="header__search-icon"></div>
        </div>

        <div className="header__upload-container">
          <Link to="/uploads">
            <button className="header__upload btn">
              <div className="header__upload-items">
                <img src={UploadBtn} alt="uploads button" />
                UPLOAD
              </div>
            </button>
          </Link>

          <div className="header__avatar-container">
            <img src={avatar} alt="avatar" className="header__avatar" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
