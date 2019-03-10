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


    componentWillReceiveProps(nextProps) {
        if (nextProps.entries !== this.props.entries) {
            localStorage.setItem("entries",
            JSON.stringify(nextProps.entries));
        }
    }

    handleEntry = event => {
        this.setState({[event.target.name]: event.target.value });
    };

    newEntryHandler = event => {
        const { text } = this.state;
        const addEntry = {
            text,
            id: this.props.entries ? this.props.entries.length + text : 0 + text
        };
        this.props.newEntry(addEntry);
        this.setState({
            text: ""
        });
    };

    removeEntry = () => {
        this.props.removeEntry();
      };


    render() {
        // const { entries } = this.props;
        return (
            <div>
                <form>
                    <input
                     onChange={this.handleEntry}
                     name="text"
                     value={this.state.text}
                     />
                     <button onClick={this.newEntryHandler}>
                        Flit!
                     </button>
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

export default connect(mapStateToProps, {
    newEntry,
    getEntry,
})(EntryContainer);