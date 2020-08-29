import React from "react";

const Navbar = (props) => {
  const  {setActivePage} = props;

  return (
    <nav className='nav-extended'>
      <div className='nav-wrapper'>
        <a className='brand-logo center' onClick={() => setActivePage('index')} >
          Karaoke Capitol
        </a>
      </div>
      <div className='nav-content'>
        <ul className='tabs tabs-transparent'>
          <li className='tab'>
            <a onClick={() => setActivePage('index')}>Home</a>
          </li>
          <li className='tab'>
            <a onClick={() => setActivePage('song')}>Find Songs</a>
          </li>
          <li className='tab'>
            <a onClick={() => setActivePage('place')}>Find Places</a>
          </li>
          <li className='tab'>
            <a onClick={() => setActivePage('upNext')}>Up Next</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
