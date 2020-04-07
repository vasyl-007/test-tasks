import React, { Fragment, Component } from "react";
// import TableList from "./components/TableList";
import NewList from "./components/NewList";

class App extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        {/* <TableList /> */}
        <NewList />
      </Fragment>
    );
  }
}

export default App;
