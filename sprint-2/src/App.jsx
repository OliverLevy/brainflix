import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main";
import Uploads from "./components/Uploads/Uploads";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          {/* <Route
            path="/"
            exact
            render={(routerProps) => (
              <Main
                sideData={this.state.sideData}
                submitHandler={(event) => this.submitHandler(event)}
                mainData={this.state.mainData}
                comments={this.state.comments}
                dynaDate={this.dynaDate}
                {...routerProps}
              />
            )}
          /> */}
          <Route path="/" exact component={Main} />
          <Route path="/uploads" component={Uploads} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
