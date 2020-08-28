import React from "react";

const Navbar = (props) => {
  return (
    <div class='navbar-fixed'>
      <nav>
        <div className='nav-wrapper'>
          {/* <a href='#' data-target='sidednav-menu' class='sidenav-trigger'>
            <i class='material-icons'>menu</i>
          </a> */}
          <ul class='right hide-on-med-and-down'>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a href='song.html'>Find Songs</a>
            </li>
            <li>
              <a href='map.html'>Find Places</a>
            </li>
            <li>
              <a href='queue.html'>Up Next</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
