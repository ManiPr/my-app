import React from 'react'
import './Header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
function Header(){
    return (
    <header>
      <div className='container'>
        <div className='nav'>
          <div className='nav__icons'>
            <div className='nav__icon'><FontAwesomeIcon icon={faInstagram} /></div>
            <div className='nav__icon'></div>
            <div className='nav__icon'></div>
          </div>
          <ul className='nav__menus'>
            <li className='nav__menu'></li>
            <li className='nav__menu'>MENU</li>
            <li className='nav__menu'>RESERVATIONS</li>
            <li className='nav__menu'>NEWS</li>
            <li className='nav__menu'>CONTACT</li>
          </ul>
          <div className='nav__logo'></div>
        </div>
      </div>
    </header>
  );
}
export default Header;
