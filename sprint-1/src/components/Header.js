import React from 'react';
import logo from '../assets/Logo/Logo-brainflix.png'
import avatar from '../assets/Images/Mohan-muruge.jpg'
import '../styles/Header.scss'
import searchIcon from '../assets/Icons/PNG/Icon-search.png'


function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Brainflix logo" className="header__logo" />
      <div className="header__item container">
        <input type="search" className="header__search" placeholder="Search" />
        <div>
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