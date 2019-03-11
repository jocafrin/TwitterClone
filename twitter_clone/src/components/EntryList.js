import React from "react";

const EntryList = props => {
  return (
    <div className="flitList">
      {props.entries.map(flit => {
        return (
          <div>
            <span>{flit.username}</span>
            <div className="eachFlit">{flit.text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default EntryList;


// eachFlit should be inline block