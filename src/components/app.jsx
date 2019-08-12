import React, { Component } from 'react';
import flats from '../../data/flats.js';
import ListOfFlats from '../components/list_of_flats.jsx';
import GoogleMapReact from 'google-map-react';
import Marker from './marker.jsx';
import config from '../../config.js';


class App extends Component {

  static defaultProps = {
    center: {
        lat: 48.8534,
        lng: 2.3488
      },
    zoom: 12
  };

  constructor(props) {
    super(props);
    this.state = {
      flats: flats,
      center: {
        lat: 48.8534,
        lng: 2.3488
      }
    };
  }

  updateFlatCenter = (lat, lng) => {
    this.setState(
      {
        center:
        {
          lat: lat,
          lng: lng
        }
      }
    );
  }

  render() {
    return(
      <div>
        <div className="flat-list">
          <ListOfFlats flats={this.state.flats} updateFlatCenter={this.updateFlatCenter} />
        </div>
        <div className="map-container" style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: config.API_KEY }}
            defaultCenter={this.props.center}
            Center={this.state.center}
            defaultZoom={this.props.zoom}
          >
            <Marker
              lat={this.state.center.lat}
              lng={this.state.center.lng}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
