/*global google*/
import React, { Component } from 'react'

class GoogleMap extends Component {
  componentDidMount() {
    // google.maps.Map() first arg is the element to display  the maps
    // second arg is the map obj
    new google.maps.Map(this.refs.map, {
      zoom: 10,
      center:{
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render() {

    return(
      <div ref="map" />
    )
  }
}

export default GoogleMap
