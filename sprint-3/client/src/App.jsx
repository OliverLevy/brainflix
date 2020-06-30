import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main";
import Uploads from "./components/Uploads/Uploads";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/video/:id" component={Main} />
          <Route path="/uploads" component={Uploads} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
