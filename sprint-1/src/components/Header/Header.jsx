import React from 'react';
import logo from '../../assets/Logo/Logo-brainflix.svg'
import avatar from '../../assets/Images/Mohan-muruge.jpg'
import './Header.scss'


function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Brainflix logo" className="header__logo" />
      <div className="header__item-container">
        <input type="search" className="header__search" placeholder="Search" />
        <div className="header__upload-container">
          <button className="header__upload btn">+ UPLOAD</button>
          <div className="header__avatar-container">
            <img src={avatar} alt="avatar" className="header__avatar" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;