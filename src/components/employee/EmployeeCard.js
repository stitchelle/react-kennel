import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./perm_identity-24px.svg')} alt="My Dog" />
          </picture>
          <h3>Employee Name: <span className="card-employee">{this.props.employee.name}</span></h3>
          
        </div>
      </div>
    );
  }
}

export default EmployeeCard;