import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./supervisor_account-24px.svg')} alt="My Dog" />
          </picture>
          <h3>Owner Name: <span className="card-owner">{this.props.owner.name}</span></h3>
          <p>Location: {this.props.owner.location}</p>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Remove</button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;