import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from './containers/search_bar'
import WeatherList from './containers/weather_list'

class App extends Component {
  render() {
    return (
      <div className="App container">
         <div className="row">
          <SearchBar />
        </div>
        <WeatherList />
      </div>
    );
  }
}

export default App;
