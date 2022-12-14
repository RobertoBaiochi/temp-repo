import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Roberto Baiochi"
    };
  }

  render() {

    const name = this.state.name;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Qualquer Coisa
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
