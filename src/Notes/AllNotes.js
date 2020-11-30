import React, { Fragment } from "react";
import { connect } from "react-redux";
import { removeNote } from "../redux/actions/actions";

class AllNotes extends React.Component {
  render() {
    const notesItems = this.props.notes.map((note, index) => (
      <li key={index}>
        <b>{note.title}</b>
        <button onClick={() => this.removeNote(index)}>x</button>
        <br />
        <span>{note.content}</span>
      </li>
    ));
    return (
      <Fragment>
        <h3>All Notes</h3>
        <ul>{notesItems}</ul>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

const mapDispatchToProps = {
  removeNote: removeNote,
};

export default connect(mapStateToProps, mapStateToProps)(AllNotes);
