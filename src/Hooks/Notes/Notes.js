import React, { Fragment } from "react";
import NotesForm from "./NotesForm";
import AllNotes from "./AllNotes";

export default function Notes() {
  return (
    <Fragment>
      <h1>React Redux App with hooks</h1>
      <NotesForm />
      <hr />
      <AllNotes />
    </Fragment>
  );
}
