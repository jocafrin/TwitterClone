import React from "react";
import './EntryList.css';
import  profImg from './profile.jpg';

const EntryList = props => {
  return (
    <div className="flitList">
      {props.entries.map(flit => {
        return (
          <div className="flitBox">
            <span>{flit.username}</span>
            <span className="handle"> @{flit.username}</span>

            <div className="eachFlit">{flit.text}</div>
            <img className="profImg" src={profImg} width="50" alt="banana cactus"/>
          </div>
        );
      })}
    </div>
  );
};

export default EntryList;


// eachFlit should be inline block