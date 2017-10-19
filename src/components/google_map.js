/*global google*/

import React, { Component} from 'react';

class GoogleMap extends Component {

  componentDidMount(){
    //passing a html element using ref to render the chart in it
    new google.maps.Map(this.refs.map, {
      zoom : 12,
      center : {
        lat : this.props.lat,
        lng : this.props.lon
      }
    });
  }

  render(){
    //ref for reference
    return <div ref="map" />
  }

}

export default GoogleMap;
