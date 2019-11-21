import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./room-24px (1).svg')} alt="My Dog" />
          </picture>
          <h3>{this.props.location.name}: <span className="card-location">{this.props.location.location}</span></h3>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;