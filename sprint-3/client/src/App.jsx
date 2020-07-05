import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main";
import Uploads from "./components/Uploads/Uploads";
import axios from "axios";

class App extends React.Component {

  uploadHandler = (e) => {
    e.preventDefault()
    axios.post('/video', {
      upload: {
        title: e.target.title.value,
        description: e.target.description.value,
        image: e.target.img.src
      }
    })
    .then(success => console.log(success))
    .catch(err => console.error(err))
    e.target.reset()
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/video/:id" component={Main} />
          <Route path="/uploads">
            <Uploads uploadHandler={this.uploadHandler}/> 
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
