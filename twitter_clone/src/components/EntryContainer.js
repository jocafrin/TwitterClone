import React, { Component } from "react";
import { connect } from "react-redux";
import { newEntry, getEntry } from "../actions";
import "./EntryContainer.css";

class EntryContainer extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  componentDidMount() {
    const myEntries = JSON.parse(localStorage.getItem("entries"));
    if (myEntries !== null) {
      this.props.getEntry(myEntries);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.entries !== this.props.entries) {
      localStorage.setItem("entries", JSON.stringify(nextProps.entries));
    }
  }

  handleEntry = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  newEntryHandler = event => {
    event.preventDefault();
    const text = this.state.text;
    const addEntry = {
      username: "jgriggs",
      text,
      id: this.props.entries ? this.props.entries.length : 0
    };
    this.props.newEntry(addEntry);
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <div className="newTweet">
        <form>
          <input
            onChange={this.handleEntry}
            name="text"
            value={this.state.text}
          />
          <button onClick={this.newEntryHandler}>Get Flutterin'</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    entries: state.entries
  };
};

export default connect(
  mapStateToProps,
  {
    newEntry,
    getEntry
  }
)(EntryContainer);
