import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          
          <h3>Employee Name: <span className="card-employee"></span></h3>
          
        </div>
      </div>
    );
  }
}

export default EmployeeCard;