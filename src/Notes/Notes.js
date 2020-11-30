import React, { Fragment } from "react";
import NotesForm from "./NotesForm";
import AllNotes from "./AllNotes";

export default class Notes extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>React Redux App</h1>
        <NotesForm />
        <hr />
        <AllNotes />
      </Fragment>
    );
  }
}
