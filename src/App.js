import React, { Component } from 'react';
import './App.css';
import Select from './components/Select';
import Card from './components/Card';

const githubUrl = "https://api.github.com/orgs/adalab/members?per_page=68";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      memberSelected: null,
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
  
  handleSelect = (event) => {
    this.setState({memberSelected: event.currentTarget.value})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Select members={this.state.membersList} handleSelect={this.handleSelect}/>
        </header>
        <main>
          {this.state.memberSelected ? 
          <Card memberSelected={this.state.memberSelected}/>
          :
          null
        }
        </main>
      </div>
    );
  }
}

export default App;
