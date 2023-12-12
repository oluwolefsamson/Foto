import React, { useState, useEffect } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getMenuStyles = () => {
    if (windowWidth <= 1400) {
      return { right: !menuOpened ? '-100%' : '0' };
    }
    return {};
  };

  return (
    <section className="h-container">
      <div className="logo">
        <img src="logo.png" alt="logo" />
      </div>

      <div className="white-gradient" />

      <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
        <div className="nav" style={getMenuStyles()}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </div>
      </OutsideClickHandler>

      <div
        className="menu-icon"
        onClick={() => setMenuOpened((prev) => !prev)}
        style={{ cursor: 'pointer' }} // Ensure the cursor indicates it's clickable
      >
        <BiMenuAltRight size={35} />
      </div>
    </section>
  );
};

export default Header;
