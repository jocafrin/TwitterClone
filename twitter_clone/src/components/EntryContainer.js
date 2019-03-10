import React, { Component } from 'react';
import { connect } from "react-redux";
import { newEntry, getEntry } from "../actions";

class EntryContainer extends Component {
    constructor() {
        super();
        this.state = {
            text:""
         };
    }

    componentDidMount() {
        const myEntries = JSON.parse(localStorage.getItem("entries"));
        if (myEntries !== null) {
          this.props.getEntry(myEntries);
        }
      }
















    render() {
        return (  );
    }
}

export default ;