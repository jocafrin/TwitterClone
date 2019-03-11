import React from "react";
import "./EntryList.css";
import profImg from "./profile.jpg";

const EntryList = props => {
  return (
    <ul className="flitList">
      {props.entries.map(flit => {
        return (
          <li>
            <div className="avatar">
              <img src={profImg} alt="banana cactus" />
              <div className="hover">
                <div className="icon-twitter" />
              </div>
            </div>
            <div className="bubble-container">
              <div className="bubble">
                <h3>@{flit.username}</h3>
                <br />
                {flit.text}
                <div className="over-bubble">
                  <div className="icon-mail-reply action" />
                  <div className="icon-retweet action" />
                  <div className="icon-star" />
                </div>
              </div>
              <div className="arrow" />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default EntryList;

