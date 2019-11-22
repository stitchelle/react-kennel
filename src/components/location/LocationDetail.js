import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

class LocationDetail extends Component {

  state = {
      name: "",
      location: "",
  }

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(this.props.locationId)
    .then((location) => {
      this.setState({
        name: location.name,
        location: location.location
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./room-24px (1).svg')} alt="Location" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Location: {this.state.location}</p>
        </div>
      </div>
    );
  }
}

export default LocationDetail;