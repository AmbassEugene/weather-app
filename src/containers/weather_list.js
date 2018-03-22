import React, { Component } from 'react';
import { connect } from 'react-redux';
import Charts from '../components/charts'
import _ from 'lodash';
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  renderWeather(cityData){
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273.15);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    const lat = cityData.city.coord.lat;
    const lon = cityData.city.coord.lon;
    // const name = cityData.city.name;


    // console.log(cityData)

    return(
      <tr key={cityData.city.id}>
        <td><GoogleMap lat={lat} lon={lon}/></td>
        <td><Charts data={temps} color="red" units="C"/></td>
        <td><Charts data={pressures} color="green" units="hPa"/></td>
        <td><Charts data={humidities} color="brown" units="%"/></td>
      </tr>
    );
  }

  render(){

    return(
      <table className="centered highlight">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>

        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList);
