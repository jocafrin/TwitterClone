import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="Nav">
      <ul class="flutter" role="navigation">
        <li class="flutter__bird">
          <i class="fab fa-twitter" />
        </li>
        <li>
          <i class="fa fa-home" />
          Home
        </li>
        <li>
          <i class="far fa-bell" />
          Notifications
        </li>
        <li>
          <i class="far fa-envelope" />
          Messages
        </li>
      </ul>
    </div>
  );
};

export default Nav;
