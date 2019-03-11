import React from "react";
import './Nav.css';
import  profImg from './profile.jpg';

const Nav = () => {
  return (
      <div className="Nav">
      <ul class="twitter" role="navigation">
    <li><i class="fa fa-home"></i>Home</li>
    <li><i class="far fa-bell"></i>Notifications</li>
    <li><i class="far fa-envelope"></i>Messages</li>
    <li class="twitter__bird"><i class="fab fa-twitter"></i></li>
    <li><form><input placeholder="Flip Through Flutter"/><i class="fa fa-search"></i></form></li>
    <li><i class="far fa-user-circle"></i></li>
    <li><button>Flit!</button></li>
  </ul>
      </div>

  );
};

export default Nav;