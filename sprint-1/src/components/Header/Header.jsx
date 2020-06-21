import React from 'react';
import logo from '../../assets/Logo/Logo-brainflix.svg'
import avatar from '../../assets/Images/Mohan-muruge.jpg'
import './Header.scss'


function Header() {
  return (
    <header className="header">
      
      <a href="#"><img src={logo} alt="Brainflix logo" className="header__logo" /></a>
        
      <div className="header__items">
        <div className="header__search-container">
          <input type="search" className="header__search-bar" placeholder="Search" />
          <div className="header__search-icon"></div>
        </div>
      
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