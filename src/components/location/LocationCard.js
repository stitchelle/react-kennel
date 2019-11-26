import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./room-24px (1).svg')} alt="Location" />
          </picture>
          <h3>Name: {this.props.locationObject.name} </h3>
          <p className="card-location">Location: {this.props.locationObject.location}</p>
          <Link to={`/locations/${this.props.locationObject.id}`}><button>Details</button></Link>
          <button type="button" onClick={() => {this.props.history.push(`/locations/${this.props.locationObject.id}/edit`)}}>Edit</button>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.locationObject.id)}>Close</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;