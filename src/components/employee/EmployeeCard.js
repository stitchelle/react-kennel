import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./perm_identity-24px.svg')} alt="employee" />
          </picture>
          <h3>Employee Name: <span className="card-employee">{this.props.employee.name}</span></h3>
          <p>Location: {this.props.employee.location}</p>
          <button type="button" onClick={() => { this.props.history.push(`/employees/${this.props.employee.id}/details`) }}>Details</button>
          <button type="button" onClick={() => {this.props.history.push(`/employees/${this.props.employee.id}/edit`)}}>Edit</button>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Fire</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;