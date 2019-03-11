import React, { Component } from "react";
import EntryContainer from "./EntryContainer";
import EntryList from "./EntryList";
import Nav from "./Nav";
import { connect } from "react-redux";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <header className="App-header">Flutter</header>
        <EntryContainer />
        <EntryList entries={this.props.entries} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    entries: state.entries
  };
};

export default connect(mapStateToProps)(App);
