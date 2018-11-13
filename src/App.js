import React, { Component } from 'react';
import './App.css';

const githubUrl = "https://api.github.com/orgs/adalab/members";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userSelected: "",
      membersList: []
    }
  }

  componentDidMount() {
    this.githubFetch()
  }

  githubFetch() {
    fetch(githubUrl)
    .then(response => response.json())
    .then(data => this.setState({ membersList: data}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <select name="" id="">
          <option value="member1">member1</option>
          <option value="member2">member2</option>
          <option value="member3">member3</option>
         </select>

        </header>
      </div>
    );
  }
}

export default App;
