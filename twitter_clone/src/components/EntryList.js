import React from "react";

const EntryList = props => {
  return (
    <div className="flitList">
      {props.entries.map(flit => {
        return <div className="eachFlit">{flit.text}</div>;
      })}
    </div>
  );
};

export default EntryList;
