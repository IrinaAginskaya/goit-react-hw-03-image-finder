// import './App.css';
import { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';

export default class App extends Component {
  state = {
    image: '',
  };

  handleFormSubmit = image => {
    this.setState({ image });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}
