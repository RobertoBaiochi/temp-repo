import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
      posts: [
        {
          id: 1,
          title: 'O Titulo 1',
          body: 'O corpo 1'
        },
        {
          id: 2,
          title: 'O Titulo 2',
          body: 'O corpo 2'
        },
        {
          id: 3,
          title: 'O Titulo 3',
          body: 'O corpo 3'
        }
      ]
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        {post.map(post => {
          <h1></h1>
        })}
      </div>
    );
  }
}

export default App;