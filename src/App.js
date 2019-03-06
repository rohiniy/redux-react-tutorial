import React, { Component } from "react";
import "./App.css";
import Posts from "./component/Posts";
import PostForm from "./component/PostForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <PostForm />
        <hr />
        <Posts />
      </div>
    );
  }
}

export default App;
